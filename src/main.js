// Movie Finder & Information System - Core Logic
// Academic Project - Status 2 & 3 Implementation

const API_KEY = '8e8e3c15';
const API_URL = 'https://www.omdbapi.com/';

// DSA Component Imports
import { customSort, customSearch, WatchLaterQueue, SearchStack } from '../dsa/dsa-logic.js';
import { mockMovies, mockDetails } from './mock-data.js';

// DSA Instances
const dsaQueue = new WatchLaterQueue();
const dsaStack = new SearchStack();

// State Management
let currentResults = [];
let isOfflineMode = false;

// DOM Elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieResults = document.getElementById('movie-results');
const searchStatus = document.getElementById('search-status');
const watchLaterList = document.getElementById('watch-later-list');
const modal = document.getElementById('movie-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    updateWatchLaterUI();

    // Set up intersect observers for reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
});

// --- Event Listeners ---
searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
        await searchMovies(query);
        // Push to search history stack (DSA concept Status 3)
        dsaStack.push(query);
    }
});

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        displayResults(currentResults, filter);
    });
});

sortSelect.addEventListener('change', () => {
    sortAndDisplay();
});

// --- API Functions ---
async function searchMovies(query) {
    searchStatus.innerHTML = '<div class="loader">Searching...</div>';
    movieResults.innerHTML = '';
    isOfflineMode = false;

    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`);

        if (response.status === 401) {
            console.warn('API Key invalid. Switching to Demo Mode...');
            throw new Error('Unauthorized');
        }

        const data = await response.json();

        if (data.Response === 'True') {
            currentResults = data.Search;
            searchStatus.innerHTML = `Found ${data.totalResults} results for "${query}"`;
            sortAndDisplay();
        } else {
            handleNoResults(query);
        }
    } catch (error) {
        console.log('Using Offline/Demo Mode fallback...');
        isOfflineMode = true;
        // DSA Integration: Use customSearch on mock data
        currentResults = customSearch(mockMovies, query);

        if (currentResults.length > 0) {
            searchStatus.innerHTML = `Showing Demo Results for "${query}" (Offline Mode)`;
            sortAndDisplay();
        } else {
            handleNoResults(query);
        }
    }
}

function handleNoResults(query) {
    searchStatus.innerHTML = `No results found for "${query}"`;
    movieResults.innerHTML = '<div class="placeholder-text">No movies found. Try "Inception", "The Dark Knight" or "Breaking Bad" (Demo Mode).</div>';
    currentResults = [];
}

async function getMovieDetails(id) {
    if (isOfflineMode) {
        console.log('DSA: Using local lookup for movie details');
        return mockDetails[id] || {
            Title: "Demo Movie",
            Year: "2024",
            Rated: "N/A",
            Runtime: "120 min",
            Genre: "Demo",
            imdbRating: "10.0",
            Plot: "This is a demo movie description used for the offline project presentation.",
            Director: "Project Developer",
            Actors: "Student Name",
            Poster: "https://via.placeholder.com/400x600?text=Demo+Poster"
        };
    }

    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
        return await response.json();
    } catch (error) {
        console.error('Detail Fetch Error:', error);
        return null;
    }
}

// --- UI Rendering ---
function displayResults(movies, filter = 'all') {
    movieResults.innerHTML = '';

    let filtered = movies;
    if (filter !== 'all') {
        filtered = movies.filter(m => m.Type === filter);
    }

    if (filtered.length === 0) {
        movieResults.innerHTML = '<div class="placeholder-text">No matching results in this category.</div>';
        return;
    }

    filtered.forEach((movie, index) => {
        const card = document.createElement('div');
        card.className = 'movie-card fade-in';
        card.style.animationDelay = `${index * 0.1}s`;

        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';

        card.innerHTML = `
            <img src="${poster}" alt="${movie.Title}" class="card-img">
            <div class="card-content">
                <span class="card-tag">${movie.Type}</span>
                <h4 class="card-title">${movie.Title}</h4>
                <p class="card-meta">${movie.Year}</p>
                <button class="btn-primary" style="margin-top: 1rem; width: 100%; padding: 0.5rem;" onclick="event.stopPropagation(); window.addToWatchLater('${movie.imdbID}')">
                    + Watch Later
                </button>
            </div>
        `;

        card.addEventListener('click', () => showMovieDetails(movie.imdbID));
        movieResults.appendChild(card);
    });
}

async function showMovieDetails(id) {
    const movie = await getMovieDetails(id);
    if (!movie) return;

    modalBody.innerHTML = `
        <div class="modal-detail-grid">
            <div class="modal-img-container">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}" alt="${movie.Title}">
            </div>
            <div class="modal-info">
                <h2>${movie.Title}</h2>
                <div class="modal-meta">
                    <span>${movie.Year}</span> | <span>${movie.Rated}</span> | <span>${movie.Runtime}</span>
                </div>
                <p class="modal-genre"><strong>Genre:</strong> ${movie.Genre}</p>
                <p class="modal-rating"><strong>IMDb Rating:</strong> ⭐ ${movie.imdbRating}</p>
                <p class="modal-plot">${movie.Plot}</p>
                <div class="modal-crew">
                    <p><strong>Director:</strong> ${movie.Director}</p>
                    <p><strong>Cast:</strong> ${movie.Actors}</p>
                </div>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

// --- DSA Integration (Status 3) ---

window.addToWatchLater = function (id) {
    const movie = currentResults.find(m => m.imdbID === id);
    if (movie) {
        dsaQueue.enqueue(movie);
        updateWatchLaterUI();
        showFeedback(`Added "${movie.Title}" to your list!`);
    }
};

window.removeFromWatchLater = function (id) {
    dsaQueue.items = dsaQueue.items.filter(m => m.imdbID !== id);
    dsaQueue.save();
    updateWatchLaterUI();
};

function updateWatchLaterUI() {
    if (!watchLaterList) return;

    const items = dsaQueue.items;
    if (items.length === 0) {
        watchLaterList.innerHTML = '<div class="placeholder-text">Your list is empty. Add some movies!</div>';
        return;
    }

    watchLaterList.innerHTML = '';
    items.forEach((movie) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster';

        card.innerHTML = `
            <img src="${poster}" alt="${movie.Title}" class="card-img">
            <div class="card-content">
                <h4 class="card-title">${movie.Title}</h4>
                <p class="card-meta">${movie.Year}</p>
                <button class="btn-primary" style="background: var(--secondary); margin-top: 1rem; width: 100%; padding: 0.5rem;" onclick="window.removeFromWatchLater('${movie.imdbID}')">
                    Remove
                </button>
            </div>
        `;
        watchLaterList.appendChild(card);
    });
}

function sortAndDisplay() {
    const criteria = sortSelect.value;
    let sorted = [...currentResults];

    if (criteria === 'year-newest') {
        sorted = customSort(sorted, 'Year', 'desc');
    } else if (criteria === 'year-oldest') {
        sorted = customSort(sorted, 'Year', 'asc');
    }

    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    displayResults(sorted, activeFilter);
}

function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback-toast';
    feedback.innerText = message;
    document.body.appendChild(feedback);
    setTimeout(() => {
        feedback.classList.add('show');
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => feedback.remove(), 300);
        }, 3000);
    }, 100);
}
