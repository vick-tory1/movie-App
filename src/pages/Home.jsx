import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaStop } from "react-icons/fa";
import MovieCard from "../Components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Home.css";

function Home() {
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  // Trailer state
  const [showVideo, setShowVideo] = useState(false);
  const [videoKey, setVideoKey] = useState("");

  const API_KEY = "e5a459669c669f0badabc03c9bc072b0";
  const BASE_URL = "https://api.themoviedb.org/3";

  // Fetch new release movies
  const fetchNewMovies = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      );
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const newMovies = await fetchNewMovies();
        setMovies(newMovies);
        setError(null);
      } catch {
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  // Search movies
  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(
          query
        )}&page=1&include_adult=false`
      );
      if (!response.ok) throw new Error("Search request failed");
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const results = await searchMovies(searchQuery);
      setMovies(results);
      setError(null);
    } catch {
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
      setSearchQuery("");
    }
  };

  const toggleFavorite = (movie) => {
    if (isFavorite(movie.id)) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  // Play trailer (only one at a time)
  const playTrailer = async (movieId) => {
    setShowVideo(false);
    setVideoKey(""); // Stop any current trailer

    try {
      const res = await fetch(
        `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );
      if (trailer) {
        setVideoKey(trailer.key);
        setShowVideo(true);
      } else {
        alert("Trailer not available");
      }
    } catch {
      alert("Failed to load trailer");
    }
  };

  // Update displayed movies whenever favorites toggle
  useEffect(() => {
    setDisplayedMovies(showFavorites ? favorites : movies);
    setShowVideo(false);
    setVideoKey("");
  }, [showFavorites, movies, favorites]);

  // Stop trailer
  const stopTrailer = () => {
    setShowVideo(false);
    setVideoKey("");
  };

  return (
    <div className="home">
      {/* Search and favorites buttons */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FaSearch className="icon" /> Search
        </button>
        <button
          type="button"
          className={`heart-button ${showFavorites ? "active" : ""}`}
          onClick={() => setShowFavorites(!showFavorites)}
        >
          <FaHeart className="icon heart" />
          {showFavorites ? " Show All" : " Favorites"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {displayedMovies.length > 0 ? (
            displayedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={isFavorite(movie.id)}
                toggleFavorite={() => toggleFavorite(movie)}
                playTrailer={() => playTrailer(movie.id)}
              />
            ))
          ) : (
            <div className="no-results">
              {showFavorites ? "No favorite movies yet." : "No movies found."}
            </div>
          )}
        </div>
      )}

      {/* Trailer Modal */}
      {showVideo && (
        <div className="video-modal">
          <button className="stop-button" onClick={stopTrailer}>
            <FaStop /> Stop
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title="Trailer"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Home;
