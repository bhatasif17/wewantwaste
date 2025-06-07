import React from "react";
import "./SkipSelector.css";

const SkipVisualizer = ({ skips, selectedSkip, onSelect }) => {
  const maxSize = Math.max(...skips.map((skip) => skip.size));

  return (
    <div className="size-visualizer">
      <div className="size-reference">
        <span>Small</span>
        <span>Medium</span>
        <span>Large</span>
        <span>XL</span>
      </div>

      <div className="visualization-area">
        {skips.map((skip) => (
          <div
            key={skip.id}
            className={`skip-option ${
              selectedSkip === skip.id ? "selected" : ""
            }`}
            onClick={() => onSelect(skip.id)}
          >
            <div
              className="size-indicator"
              style={{
                height: `${(skip.size / maxSize) * 80 + 20}%`,
                backgroundColor:
                  selectedSkip === skip.id ? "#3498db" : "#e0e0e0",
              }}
            >
              <div className="size-label">{skip.size} yd</div>
            </div>
            <div className="option-details">
              <div className="price">£{skip.price}</div>
              <div className="hire-period">{skip.hire_days} days</div>
            </div>
            <div
              className={`selection-indicator ${
                selectedSkip === skip.id ? "selected" : ""
              }`}
            >
              {selectedSkip === skip.id ? "✓ Selected" : "Select"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkipVisualizer;
