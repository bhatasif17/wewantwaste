import React, { useState, useEffect } from "react";
import SkipVisualizer from "./SkipVisualizer";
import SkipDetails from "./SkipDetails";
import "./SkipSelector.css";

const SkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );

        if (!response.ok) throw new Error("Failed to fetch skip data");

        const data = await response.json();
        setSkips(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelect = (id) => {
    setSelectedSkip(id);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      const selected = skips.find((skip) => skip.id === selectedSkip);
      alert(
        `Proceeding with ${selected.size} yard skip for £${selected.price}`
      );
      // Here you would typically navigate to the next step
    }
  };

  if (loading)
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Finding available skips in your area...</p>
      </div>
    );

  if (error)
    return (
      <div className="error">
        <p>⚠️ Error loading skip options</p>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );

  return (
    <div className="skip-selector">
      <SkipVisualizer
        skips={skips}
        selectedSkip={selectedSkip}
        onSelect={handleSelect}
      />

      <SkipDetails
        skips={skips}
        selectedSkip={selectedSkip}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default SkipSelector;
