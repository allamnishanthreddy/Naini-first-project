/**
 * Movie Finder - DSA Integration (Status 3)
 * This module demonstrates Data Structures and Algorithms concepts
 * applied to the Movie Finder application.
 */

// --- 1. Custom Sorting Algorithm (Bubble Sort) ---
// Used to arrange movies by specific criteria like Year or Title
export function customSort(array, key, order = 'asc') {
    console.log(`DSA: Sorting movies by ${key} in ${order} order using Bubble Sort...`);
    const n = array.length;
    let sortedArray = [...array];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            let valA = sortedArray[j][key];
            let valB = sortedArray[j + 1][key];

            // Handle numeric strings (like Year)
            if (!isNaN(valA) && !isNaN(valB)) {
                valA = parseInt(valA);
                valB = parseInt(valB);
            }

            let shouldSwap = false;
            if (order === 'asc') {
                shouldSwap = valA > valB;
            } else {
                shouldSwap = valA < valB;
            }

            if (shouldSwap) {
                // Swap elements
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
            }
        }
    }
    console.log('DSA: Sorting complete.');
    return sortedArray;
}

// --- 2. Custom Searching Algorithm (Linear Search) ---
// Used to find a specific movie in the local result set
export function customSearch(array, searchTerm) {
    console.log(`DSA: Searching for "${searchTerm}" in current results using Linear Search...`);
    const results = [];
    const term = searchTerm.toLowerCase();

    for (let i = 0; i < array.length; i++) {
        if (array[i].Title.toLowerCase().includes(term)) {
            console.log(`DSA: Match found at index ${i}: ${array[i].Title}`);
            results.push(array[i]);
        }
    }

    if (results.length === 0) console.log('DSA: No matches found.');
    return results;
}

// --- 3. Queue Implementation (Watch Later) ---
// Demonstrates First-In-First-Out (FIFO) principle
export class WatchLaterQueue {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('dsa_queue')) || [];
    }

    enqueue(movie) {
        if (!this.items.find(m => m.imdbID === movie.imdbID)) {
            this.items.push(movie);
            this.save();
            console.log(`DSA: Enqueued "${movie.Title}" to Watch Later queue.`);
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items.shift();
        this.save();
        console.log(`DSA: Dequeued "${item.Title}" from Watch Later queue.`);
        return item;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    save() {
        localStorage.setItem('dsa_queue', JSON.stringify(this.items));
    }
}

// --- 4. Stack Implementation (Recent Searches) ---
// Demonstrates Last-In-First-Out (LIFO) principle
export class SearchStack {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('dsa_stack')) || [];
    }

    push(query) {
        this.items.push(query);
        if (this.items.length > 5) this.items.shift(); // Limit to 5
        this.save();
        console.log(`DSA: Pushed "${query}" onto Search History stack.`);
    }

    pop() {
        if (this.isEmpty()) return null;
        const item = this.items.pop();
        this.save();
        console.log(`DSA: Popped "${item}" from Search History stack.`);
        return item;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    save() {
        localStorage.setItem('dsa_stack', JSON.stringify(this.items));
    }
}
