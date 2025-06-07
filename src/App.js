import React from "react";
import SkipSelector from "./components/SkipSelector.js";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="app-header">
        <div className="logo">We Want Waste</div>
        <h1>Find Your Perfect Skip Size</h1>
        <p>Visualize and select the ideal skip for your project</p>
      </div>
      <SkipSelector />
      <div className="app-footer">
        <p>
          ✓ 24/7 Customer Support ✓ Local Delivery ✓ Environmentally Responsible
        </p>
      </div>
    </div>
  );
}

export default App;
