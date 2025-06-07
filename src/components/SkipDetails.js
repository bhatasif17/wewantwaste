import React from "react";
import "./SkipSelector.css";

const SkipDetails = ({ skips, selectedSkip, onContinue }) => {
  if (!selectedSkip) {
    return (
      <div className="selection-prompt">
        <div className="prompt-icon">👆</div>
        <h3>Select a skip size</h3>
        <p>Click on a skip to see details and select</p>
      </div>
    );
  }

  const selected = skips.find((s) => s.id === selectedSkip);

  return (
    <div className="skip-details-container">
      <div className="selected-skip-details">
        <div className="detail-card">
          <h3>Your Selection</h3>
          <div className="detail-row">
            <span>Size:</span>
            <strong>{selected.size} Yards</strong>
          </div>
          <div className="detail-row">
            <span>Price:</span>
            <strong>£{selected.price}</strong>
          </div>
          <div className="detail-row">
            <span>Hire Period:</span>
            <strong>{selected.hire_days} Days</strong>
          </div>
          <div className="detail-row">
            <span>Dimensions:</span>
            <strong>{selected.dimensions}</strong>
          </div>
        </div>

        <button className="continue-btn" onClick={onContinue}>
          Continue to Booking
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default SkipDetails;
