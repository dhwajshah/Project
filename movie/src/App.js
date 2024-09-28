/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/About";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ContactPage from "./Components/ContactPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import HomePage from "./Components/HomePage";
import MovieDetailPage from "./Components/MovieDetailPage";
import SearchResults from "./Components/SearchResults";

// Dummy movies data
const initialMovies = [
  { id: 1, title: "Kalki 2898 AD", imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg" },
  { id: 2, title: "Kill", imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg" },
  {
    id: 3,
    title: "Stree 2",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 4,
    title: "Fakt Purush Mate",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/fakt-purusho-maate-et00396495-1720420947.jpg",
  },
  {
    id: 5,
    title: "Khel Khel Mein",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg",
  },
  {
    id: 6,
    title: "Vedaa",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vedaa-et00386426-1723550870.jpg",
  },
  {
    id: 7,
    title: "Thalapathy is the G.O.A.T.",
    imageUrl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thalapathy-is-the-goat-et00401441-1725014881.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 8,
    title: "Kahan Shuru Kahan Khatam",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kahan-shuru-kahan-khatam-et00408945-1725623704.jpg",
  },
  {
    id: 9,
    title: "Devara - Part 1",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/devara--part-1-et00310216-1712750637.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 10,
    title: "Locha Laapsi",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/locha-laapsi-et00410671-1725456396.jpg",
  }, // Add more movie objects as needed
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    const filteredMovies = initialMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar onSearch={handleSearch} />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage movies={movies} />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
            <Route path="/search" element={<SearchResults movies={searchResults} />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
