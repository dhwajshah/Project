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
  // Add more movie objects as needed
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
