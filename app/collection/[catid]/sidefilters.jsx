'use client'
import React from "react";
import { Slider } from "@material-ui/core";

 

function SideFilters({
  priceRange,
  selectedTypes,
  selectedConfigurations,
  onFilterChange,
  availableTypes,
  availableConfigurations,
}) {

 

  const handlePriceChange = (event, newValue) => {
    onFilterChange(newValue, selectedTypes, selectedConfigurations);
  };

  const handleTypeChange = (type) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onFilterChange(priceRange, newTypes, selectedConfigurations);
  };

  const handleConfigChange = (config) => {
    const newConfigs = selectedConfigurations.includes(config)
      ? selectedConfigurations.filter((c) => c !== config)
      : [...selectedConfigurations, config];
    onFilterChange(priceRange, selectedTypes, newConfigs);
  };

  return (
    <div className="w-full lg:w-1/4 bg-white shadow-md rounded-lg p-6">
       
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="mb-6">
      
        <h3 className="font-medium mb-2">Price Range</h3>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={40000}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Type</h3>
        {availableTypes.map((type) => (
          <label key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedTypes.includes(type)}
              onChange={() => handleTypeChange(type)}
            />
            <span className="ml-2 text-gray-700">{type}</span>
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-medium mb-2">Configuration</h3>
        {availableConfigurations.map((config) => (
          <label key={config} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedConfigurations.includes(config)}
              onChange={() => handleConfigChange(config)}
            />
            <span className="ml-2 text-gray-700">{config}</span>
          </label>
        ))}
      </div>
      
      
    </div>
  );
}

export default SideFilters;
