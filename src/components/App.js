import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Card from "./Card";
import Home from "./Home";
import Error from "./Error";
import "../styles/App.css";

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [movieData, setMovieData] = useState({});
  const [searched, setSearched] = useState("");
  const [poster, setPoster] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function onSearch(phrase, posterLink) {
    setSearched(phrase);
    setPoster(posterLink);
  }

  return (
    <div className="app-container">
      <Navbar>
        <Search
          setMovieData={setMovieData}
          onSearch={onSearch}
          setLoading={setLoading}
          setPageLoaded={setPageLoaded}
          setError={setError}
        />
      </Navbar>
      <div className="main">
        <Home />
        {pageLoaded && !loading && (
          <Card movieData={movieData} searched={searched} poster={poster} />
        )}
        {loading && <div class="loader"></div>}
        {error && <Error />}
      </div>
    </div>
  );
}

export default App;
