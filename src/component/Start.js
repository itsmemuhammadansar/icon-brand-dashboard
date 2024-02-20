import React from "react";
import { useNavigate } from "react-router-dom";
import "./starter.css";

export default function Start() {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate("/PSM-Rank");
  };

  return (
    <div className="background">
      <button className="icon-club" onClick={handleImageClick}> ICON-CLUB </button>
      {/* <img
        className="starter-btn"
        src={logo}
        alt="Victor Club Logo"
        onClick={handleImageClick}
      /> */}
    </div>
  );
}
