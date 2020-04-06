import React from "react";
import "./styles.css";
import Navigation from "./Navigation";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <Navigation data={data} />
    </div>
  );
}
