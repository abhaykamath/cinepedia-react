import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div id="info">
        <p>
          <span>CINEPEDIA</span> &nbsp;is based on the{" "}
          <a href="https://www.omdbapi.com/" target="_blank">
            OMDb API
          </a>
          .
        </p>
        <br></br>
        <p>
          The Open Movie Database ( OMDb ) API is a RESTful web service to
          obtain movie information.
        </p>
      </div>
    </div>
  );
}

export default Home;
