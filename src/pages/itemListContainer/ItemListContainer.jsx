import React from "react";
import "./itemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="containerGreeting">
      <h1>{greeting}</h1>
    </div>
  );
};
