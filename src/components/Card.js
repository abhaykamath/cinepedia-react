import React from "react";
import "../styles/Card.css";

function Card({ movieData, searched, poster }) {
  const {
    Title,
    Poster,
    Actors,
    Director,
    Plot,
    Released,
    Runtime,
    Rated,
    Genre,
    imdbRating,
    BoxOffice,
  } = movieData;
  return (
    <>
      {Object.keys(movieData).length !== 0 && (
        <div className="card">
          <div id="poster-pane">
            {poster.length !== 0 ? <img alt="Poster not available" src={Poster} /> : ""}
          </div>
          <div id="info-pane">
            {searched.length !== 0 ? <h1>{Title}</h1> : ""}
            {searched.length !== 0 ? <p><span className="key">Actors </span>: {Actors}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Director</span> : {Director}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Released</span> : {Released}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Genre</span> : {Genre}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Plot</span> : {Plot}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Runtime</span> : {Runtime}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Rated</span> : {Rated}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">Box Ofiice</span> : {BoxOffice}</p> : ""}
            {searched.length !== 0 ? <p><span className="key">IMDb Rating</span> : {imdbRating}</p> : ""}
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
