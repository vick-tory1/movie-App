import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../Components/MovieCard";
import "../css/Favorites.css"; // optional styling

function FavoritesPage() {
  const { favorites, removeFromFavorites, isFavorite } = useMovieContext();

  return (
    <div className="favorites-page">
      <h1>My Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p className="no-favorites">You have no favorite movies yet.</p>
      ) : (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={isFavorite(movie.id)}
              toggleFavorite={() => removeFromFavorites(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
