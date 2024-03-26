// ThemeSelector.js
"use client";
import { useState } from "react";

const ThemeSelector = () => {
  const [primaryColor, setPrimaryColor] = useState("#252932"); // Default to dark color

  const handleColorChange = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <div>
      <label>Select Primary Color:</label>
      <select
        value={primaryColor}
        onChange={(e) => handleColorChange(e.target.value)}
      >
        <option value="#252932">Dark</option>
        <option value="#EA2027">Red</option>
        <option value="#FD6969">Orange</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
