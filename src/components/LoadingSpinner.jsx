import React from "react";
import "../styles/LoadingSpinner.scss";

const LoadingSpinner = () => (
  <div className="loading-spinner-wrapper">
    <div className="loading-spinner">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;
