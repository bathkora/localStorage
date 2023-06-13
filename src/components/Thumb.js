import React from "react";
import Thumb1 from "../images/Screenshot 2023-05-30 163131.png";
import "./Thumb.css";

const Thumb = ({ title, views, channel }) => {
  return (
    <>
      <div className="container">
        <img src={Thumb1} className="img"></img>
        <div>Title:{title}</div>
        <div>{channel}</div>
        <div>
          {views} views <span>:</span>8 months ago
        </div>
      </div>
    </>
  );
};

export default Thumb;
