// Movie Finder - Mock Data Fallback
// Updated to include Telugu Film Industry (Tollywood) movies

export const mockMovies = [
    // International
    {
        Title: "Inception",
        Year: "2010",
        imdbID: "tt1375666",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
        Title: "Interstellar",
        Year: "2014",
        imdbID: "tt0816692",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    // Telugu (Tollywood)
    {
        Title: "Baahubali: The Beginning",
        Year: "2015",
        imdbID: "tt2631186",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1OTAtNDYyY2UyNjgzMjU0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
    },
    {
        Title: "Baahubali 2: The Conclusion",
        Year: "2017",
        imdbID: "tt4824302",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOGJjNzZmMmUtMjljZC00ZTFjLWE4NDUtMWU2NThhNDY5YTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        Title: "RRR",
        Year: "2022",
        imdbID: "tt8178634",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctZDljNy00ZGRlLTg2Y2UtOGE4YWVkZWI5MjAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        Title: "Pushpa: The Rise",
        Year: "2021",
        imdbID: "tt12003946",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMmU4YTYyY2ItNDMyOC00NWFjLWJmNzItZDY3MzdkN2VlYmY1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"
    },
    {
        Title: "Arjun Reddy",
        Year: "2017",
        imdbID: "tt7294534",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjM3MTI5ODgzNF5BMl5BanBnXkFtZTgwNzY2Nzc0MzI@._V1_SX300.jpg"
    },
    {
        Title: "Eega",
        Year: "2012",
        imdbID: "tt2258337",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMmI1MTNlMDctYmY4Yi00ZGVmLTlhMDAtN2U0ZGI4MTFhZDZlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        Title: "Magadheera",
        Year: "2009",
        imdbID: "tt1447500",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODcwM2FiZGYtZTgxOC00MmRhLTk0NWEtYWY0NmI2NzhkZGZlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    {
        Title: "Jersey",
        Year: "2019",
        imdbID: "tt9400512",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDNlZGI0ZDgtYzExOC00MGY2LWEzOGYtZGRlM2ZlNDVlYjY2XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg"
    },
    {
        Title: "Hanu-Man",
        Year: "2024",
        imdbID: "tt14534838",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMDRiZjYxZWMtOTUxZTA0YzhkLWE3ZjUtOGNjMDY0ZGVjOTcxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"
    }
];

export const mockDetails = {
    "tt2631186": {
        Title: "Baahubali: The Beginning",
        Year: "2015",
        Rated: "UA",
        Runtime: "159 min",
        Genre: "Action, Drama",
        imdbRating: "8.0",
        Plot: "A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.",
        Director: "S.S. Rajamouli",
        Actors: "Prabhas, Rana Daggubati, Anushka Shetty",
        Poster: "https://m.media-amazon.com/images/M/MV5BYWVlMjVhZWYtNWViNC00ODFkLTk1OTAtNDYyY2UyNjgzMjU0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg"
    },
    "tt8178634": {
        Title: "RRR",
        Year: "2022",
        Rated: "UA",
        Runtime: "187 min",
        Genre: "Action, Drama",
        imdbRating: "7.8",
        Plot: "A fearless warrior on a perilous mission comes face to face with a steely cop serving British forces in this epic saga set in pre-independent India.",
        Director: "S.S. Rajamouli",
        Actors: "N.T. Rama Rao Jr., Ram Charan, Ajay Devgn",
        Poster: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctZDljNy00ZGRlLTg2Y2UtOGE4YWVkZWI5MjAzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    },
    "tt12003946": {
        Title: "Pushpa: The Rise",
        Year: "2021",
        Rated: "UA",
        Runtime: "179 min",
        Genre: "Action, Crime, Drama",
        imdbRating: "7.6",
        Plot: "Pushpa Raj is a laborer who rises through the ranks of a red sandalwood smuggling syndicate, making some powerful enemies along the way.",
        Director: "Sukumar",
        Actors: "Allu Arjun, Rashmika Mandanna, Fahadh Faasil",
        Poster: "https://m.media-amazon.com/images/M/MV5BMmU4YTYyY2ItNDMyOC00NWFjLWJmNzItZDY3MzdkN2VlYmY1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg"
    }
};
