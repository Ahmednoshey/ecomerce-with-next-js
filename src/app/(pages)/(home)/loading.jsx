import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <div
      style={{ marginBlock: "90px", display: "flex", justifyContent: "center" }}
    >
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
