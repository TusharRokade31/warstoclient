"use client";
import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useAuth } from "@/context/AuthContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";

function Filters({
  priceRange,
  selectedTypes,
  selectedConfigurations,
  onFilterChange,
  availableTypes,
  availableConfigurations,
}) {
  const { openFilterDrawer } = useAuth();

  // State for active filters
  const [activeFilters, setActiveFilters] = useState({
    price: false,
    types: false,
    configurations: false,
  });

  const handlePriceChange = (event, newValue) => {
    onFilterChange(newValue, selectedTypes, selectedConfigurations);
    setActiveFilters((prev) => ({ ...prev, price: true }));
  };

  const handleTypeChange = (type) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    onFilterChange(priceRange, newTypes, selectedConfigurations);

    setActiveFilters((prev) => ({
      ...prev,
      types: newTypes.length > 0,
    }));
  };

  const handleConfigChange = (config) => {
    const newConfigs = selectedConfigurations.includes(config)
      ? selectedConfigurations.filter((c) => c !== config)
      : [...selectedConfigurations, config];
    onFilterChange(priceRange, selectedTypes, newConfigs);

    setActiveFilters((prev) => ({
      ...prev,
      configurations: newConfigs.length > 0,
    }));
  };

  const arr = [
    {
      name: "sort",
      content: <div>hello</div>,
    },
    {
      name: "size",
      content: <div>hello</div>,
    },
    {
      name: "dimensions",
      content: <div>hello</div>,
    },
    {
      name: "feature",
      content: <div>hello</div>,
    },
    {
      name: "price",
      content: (
        <div className="px-5">
          <h3 className="font-medium mb-2">Price Range</h3>
          <Box sx={{ width: 300 }}>
            <Slider
              defaultValue={priceRange}
              size="medium"
              sx={{ color: "#ef4665", padding: "5px" }}
              onChange={handlePriceChange}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={0}
              max={40000}
            />
          </Box>
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>
      ),
    },
    {
      name: "doors",
      content: (
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
      ),
    },
    {
      name: "type",
      content: (
        <div className="mb-6">
          <h3 className="font-medium mb-2">Type</h3>
          {availableTypes.map((type) => (
            <label key={type} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-[#ef4665]"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
              />
              <span className="ml-2 text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Active Filters Display */}
      {activeFilters.types || activeFilters.configurations ? (
        <div className="mb-4">
          <h3 className="font-medium">Active Filters:</h3>
          <ul>
            {/* {activeFilters.price && <li>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</li>} */}
            {activeFilters.types && (
              <li className=" hidden lg:block text-black text-start py-2 px-6 rounded-full bg-[#ef4665]">Selected Types: {selectedTypes.join(", ")}</li>
            )}
            {activeFilters.configurations && (
              <li>
                Selected Configurations: {selectedConfigurations.join(", ")}
              </li>
            )}
          </ul>
        </div>
      ) : (
        ""
      )}

      {/* Filter Menu */}
      <div className="flex justify-around">
        {arr.map((p, index) => (
          <Menu key={index} allowHover placement="bottom">
            <MenuHandler >
              <button className="bg-gray-300 hidden lg:block text-black text-start py-2 px-6 rounded-full hover:bg-[#ef4665] hover:text-white transition">
                {p.name} <ArrowDropDownIcon />
              </button>
            </MenuHandler>
            <MenuList className="border-none">{p.content}</MenuList>
          </Menu>
        ))}

        <button
          onClick={openFilterDrawer}
          className="bg-gray-300 hidden sm:block text-black text-start py-2 px-6 rounded-full hover:bg-[#ef4665] hover:text-white transition"
        >
          All Filter <ArrowDropDownIcon />
        </button>
      </div>
    </>
  );
}

export default Filters;
