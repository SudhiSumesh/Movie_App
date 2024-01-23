import Youtube from "react-youtube";
import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import { imageUrl } from "../../Constants/Constants";
import { API_KEY } from "../../Constants/Constants";
function RowPost(props) {
  const [urlId, setURlID] = useState([]);
  const [poster, setPoster] = useState([]);
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        //console.log(response.data.results);
        setPoster(response.data.results);
      })
      .catch((err) => {
        alert("Api_Error");
      });
  });
  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results !== 0) {
          setURlID(response.data.results[0]);
        } else {
          alert("not Found");
        }
      });
  };
  return (
    <div className="row">
      <h2 className="title" key={props.title}>
        {props.title}
      </h2>
      <div className="posterContainer">
        {poster.map((obj) => (
          <div
            onClick={() => handleMovie(obj.id)}
            style={{
              backgroundImage: `url(${imageUrl + obj.backdrop_path})`,
            }}
            className={props.isSmall ? "smallposter" : "poster"}
          ></div>
        ))}
      </div>
      {urlId.key && <Youtube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default RowPost;
