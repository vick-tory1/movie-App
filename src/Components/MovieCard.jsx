// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import "../css/MovieCard.css";

// function MovieCard({ movie, isFavorite, toggleFavorite }) {
//   const imageUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : "https://via.placeholder.com/300x450?text=No+Image";

//   return (
//     <div className="movie-card">
//       <img src={imageUrl} alt={movie.title} className="movie-image" />
//       <div className="movie-info">
//         <h3>{movie.title}</h3>
//         <p>⭐ {movie.vote_average}</p>
//         <p>{movie.release_date?.split("-")[0]}</p>
//         <button className="fav-btn" onClick={toggleFavorite}>
//           {isFavorite ? (
//             <FaHeart className="fav-icon filled" />
//           ) : (
//             <FaRegHeart className="fav-icon" />
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// // export default MovieCard;

// import "../css/MovieCard.css"
// import { useMovieContext } from "../contexts/MovieContext"

// function MovieCard({movie}) {
//     const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
//     const favorite = isFavorite(movie.id)

//     function onFavoriteClick(e) {
//         e.preventDefault()
//         if (favorite) removeFromFavorites(movie.id)
//         else addToFavorites(movie)
//     }

//     return <div className="movie-card">
//         <div className="movie-poster">
//             <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
//             <div className="movie-overlay">
//                 <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
//                     ♥
//                 </button>
//             </div>
//         </div>
//         <div className="movie-info">
//             <h3>{movie.title}</h3>
//             <p>{movie.release_date?.split("-")[0]}</p>
//         </div>
//     </div>
// }

// export default MovieCard;



// import { useState } from "react";
// import "../css/MovieCard.css";
// import { useMovieContext } from "../contexts/MovieContext";

// function MovieCard({ movie }) {
//   const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
//   const favorite = isFavorite(movie.id);

//   // State for trailer modal
//   const [showVideo, setShowVideo] = useState(false);
//   const [videoKey, setVideoKey] = useState("");

//   // Toggle favorite
//   const toggleFavorite = () => {
//     if (favorite) removeFromFavorites(movie.id);
//     else addToFavorites(movie);
//   };

//   // Fetch and show trailer
//   const handlePlayVideo = async () => {
//     const API_KEY = "e5a459669c669f0badabc03c9bc072b0";
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
//       );
//       const data = await res.json();
//       const trailer = data.results.find(
//         (v) => v.type === "Trailer" && v.site === "YouTube"
//       );
//       if (trailer) {
//         setVideoKey(trailer.key);
//         setShowVideo(true);
//       } else {
//         alert("Trailer not available");
//       }
//     } catch {
//       alert("Failed to load trailer");
//     }
//   };

//   const imageUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : "https://via.placeholder.com/300x450?text=No+Image";

//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img src={imageUrl} alt={movie.title} />
//         <div className="movie-overlay">
//           <button
//             className={`favorite-btn ${favorite ? "active" : ""}`}
//             onClick={toggleFavorite}
//           >
//             🤍
//           </button>
//           <button className="play-button" onClick={handlePlayVideo}>
//             ▶ Play Trailer
//           </button>
//         </div>
//       </div>

//       <div className="movie-info">
//         <h3 className="movie-title">{movie.title}</h3>
//         <p className="movie-rating">⭐ {movie.vote_average}</p>
//         <p className="movie-release-date">
//           {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
//         </p>
//       </div>

//       {showVideo && (
//         <div className="video-modal" onClick={() => setShowVideo(false)}>
//           <iframe
//             src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
//             title="Trailer"
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// }

// // export default MovieCard;


// import { useState } from "react";
// import "../css/MovieCard.css";
// import { useMovieContext } from "../contexts/MovieContext";

// function MovieCard({ movie }) {
//   const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
//   const favorite = isFavorite(movie.id);

//   // State for trailer modal
//   const [showVideo, setShowVideo] = useState(false);
//   const [videoKey, setVideoKey] = useState("");

//   // Toggle favorite
//   const toggleFavorite = () => {
//     if (favorite) removeFromFavorites(movie.id);
//     else addToFavorites(movie);
//   };

//   // Fetch and show trailer
//   const handlePlayVideo = async () => {
//     const API_KEY = "e5a459669c669f0badabc03c9bc072b0";
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
//       );
//       const data = await res.json();
//       const trailer = data.results.find(
//         (v) => v.type === "Trailer" && v.site === "YouTube"
//       );
//       if (trailer) {
//         setVideoKey(trailer.key);
//         setShowVideo(true);
//       } else {
//         alert("Trailer not available");
//       }
//     } catch {
//       alert("Failed to load trailer");
//     }
//   };

//   // Close trailer and stop video
//   const handleCloseVideo = () => {
//     setShowVideo(false);
//     setVideoKey(""); // clear video key to stop playback
//   };

//   const imageUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : "https://via.placeholder.com/300x450?text=No+Image";

//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img src={imageUrl} alt={movie.title} />
//         <div className="movie-overlay">
//           <button
//             className={`favorite-btn ${favorite ? "active" : ""}`}
//             onClick={toggleFavorite}
//           >
//             🤍
//           </button>
//           <button className="play-button" onClick={handlePlayVideo}>
//             ▶ Play Trailer
//           </button>
//         </div>
//       </div>

//       <div className="movie-info">
//         <h3 className="movie-title">{movie.title}</h3>
//         <p className="movie-rating">⭐ {movie.vote_average}</p>
//         <p className="movie-release-date">
//           {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
//         </p>
//       </div>

//       {showVideo && (
//         <div className="video-modal">
//           <button className="close-btn" onClick={handleCloseVideo}>
//             ✖
//           </button>
//           <iframe
//             src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
//             title="Trailer"
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MovieCard;





// import { useState } from "react";
// import "../css/MovieCard.css";
// import { useMovieContext } from "../contexts/MovieContext";

// function MovieCard({ movie }) {
//   const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
//   const favorite = isFavorite(movie.id);

//   const [showVideo, setShowVideo] = useState(false);
//   const [videoKey, setVideoKey] = useState("");

//   const toggleFavorite = () => {
//     if (favorite) removeFromFavorites(movie.id);
//     else addToFavorites(movie);
//   };

//   const handlePlayVideo = async () => {
//     const API_KEY = "e5a459669c669f0badabc03c9bc072b0";
//     try {
//       const res = await fetch(
//         `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
//       );
//       const data = await res.json();
//       const trailer = data.results.find(
//         (v) => v.type === "Trailer" && v.site === "YouTube"
//       );
//       if (trailer) {
//         setVideoKey(trailer.key);
//         setShowVideo(true);
//       } else {
//         alert("Trailer not available");
//       }
//     } catch {
//       alert("Failed to load trailer");
//     }
//   };

//   const handleCloseVideo = () => {
//     setShowVideo(false);
//     setVideoKey("");
//   };

//   const imageUrl = movie.poster_path
//     ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     : "https://via.placeholder.com/300x450?text=No+Image";

//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img src={imageUrl} alt={movie.title} />
        
//         {showVideo ? (
//           <div className="video-overlay">
//             <iframe
//               src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
//               title="Trailer"
//               frameBorder="0"
//               allow="autoplay; encrypted-media"
//               allowFullScreen
//             ></iframe>
//             <button className="close-btn" onClick={handleCloseVideo}>
//               ✖
//             </button>
//           </div>
//         ) : (
//           <div className="movie-overlay">
//             <button
//               className={`favorite-btn ${favorite ? "active" : ""}`}
//               onClick={toggleFavorite}
//             >
//               🤍
//             </button>
//             <button className="play-button" onClick={handlePlayVideo}>
//               ▶ Play Trailer
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="movie-info">
//         <h3 className="movie-title">{movie.title}</h3>
//         <p className="movie-rating">⭐ {movie.vote_average}</p>
//         <p className="movie-release-date">
//           {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;









import { useState } from "react";
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { FaHeart, FaPlay } from "react-icons/fa";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const [showVideo, setShowVideo] = useState(false);
  const [videoKey, setVideoKey] = useState("");

  const toggleFavorite = () => {
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  const handlePlayVideo = async () => {
    const API_KEY = "e5a459669c669f0badabc03c9bc072b0";
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${API_KEY}&language=en-US`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (v) => v.type === "Trailer" && v.site === "YouTube"
      );
      if (trailer) {
        setVideoKey(trailer.key);
        setShowVideo(true);
      } else {
        alert("Trailer not available.");
      }
    } catch {
      alert("Failed to load trailer.");
    }
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoKey("");
  };

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={imageUrl} alt={movie.title} />

        {/* Overlay with buttons */}
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={toggleFavorite}
          >
            <FaHeart />🤍
          </button>
          <button className="play-btn" onClick={handlePlayVideo}>
            <FaPlay /> Trailer
          </button>
        </div>

        {/* Trailer overlay */}
        {showVideo && (
          <div className="video-overlay">
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button className="close-video-btn" onClick={handleCloseVideo}>
              ✖
            </button>
          </div>
        )}
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">⭐⭐⭐ {movie.vote_average}</p>
        <p className="movie-release-date">
          {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;




// import "../css/MovieCard.css";
// import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";

// function MovieCard({ movie, isFavorite, toggleFavorite }) {
//   function onFavoriteClick(e) {
//     e.stopPropagation();
//     toggleFavorite(movie);
//   }

//   // ⭐ Render stars (shows half gold + half gray for .5 ratings)
//   function renderStars(voteAverage) {
//     const rating = voteAverage / 2; // TMDb gives 0–10, we want 0–5
//     const stars = [];

//     for (let i = 1; i <= 4; i++) {
//       if (rating >= i) {
//         // full star
//         stars.push(<FaStar key={i} className="star full" />);
//       } else if (rating >= i - 0.5) {
//         // half star
//         stars.push(<FaStarHalfAlt key={i} className="star half" />);
//       } else {
//         // empty star
//         stars.push(<FaRegStar key={i} className="star empty" />);
//       }
//     }

//     return stars;
//   }

//   return (
//     <div className="movie-card">
//       <div className="movie-poster">
//         <img
//           src={
//             movie.poster_path
//               ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//               : "/no-image.jpg"
//           }
//           alt={movie.title}
//         />
//         <div className="movie-overlay">
//           <button
//             className={`favorite-btn ${isFavorite ? "active" : ""}`}
//             onClick={onFavoriteClick}
//           >
//             <FaHeart />
//           </button>
//         </div>
//       </div>

//       <div className="movie-info">
//         <h3 className="movie-title">{movie.title}</h3>

//         <div className="movie-rating">
//           {renderStars(movie.vote_average)}
//           <span className="rating-number">
//             {movie.vote_averagee}
//           </span>
//         </div>

//         <p className="movie-release-date">
//           {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MovieCard;
