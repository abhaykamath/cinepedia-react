import React, { useRef, useState } from "react";
import "../styles/Search.css";

const API = "http://www.omdbapi.com/?apikey=76f27438&t=";

function Search({ setMovieData, onSearch, setLoading, setPageLoaded, setError }) {
  const searchRef = useRef(null);
  const [movie, setMovie] = useState("");
  function getMovieDetails(searched) {
    fetch(API + searched).then((res) =>
      res.json().then((movie) => {
        setLoading(false);
        if (movie.Response === "True") {
          setError(false);
          setMovieData(movie);
          onSearch(movie.Title, movie.Poster);
        } else if (movie.Response === "False") {
          setError(true);
          setMovieData({});
        }
      })
    );
  }

  return (
    <div className="search-container">
      <input ref={searchRef} id="search" placeholder="Search Cinepedia" onKeyDown={(e) => {
        if(e.key === "Enter") {
          setError(false);
          setLoading(true);
          setPageLoaded(true);
          getMovieDetails(searchRef.current.value.split(" ").join("+"));
        }
      }} />
      <button
        onClick={() => {
          setError(false);
          setLoading(true);
          setPageLoaded(true);
          getMovieDetails(searchRef.current.value.split(" ").join("+"));
        }}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
}

export default Search;
