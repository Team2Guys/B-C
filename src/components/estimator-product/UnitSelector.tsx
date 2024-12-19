"use client";
import React from "react";

const units = ["mm", "cm", "inches"];

interface UnitSelectorProps {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
}

const UnitSelector: React.FC<UnitSelectorProps> = ({ selectedUnit, setSelectedUnit }) => {
  const handleUnitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <div className="flex items-center gap-5">
      {units.map((unit) => (
        <label key={unit} className="flex items-center gap-1 cursor-pointer">
          <input
            type="radio"
            name="unit"
            value={unit}
            checked={selectedUnit === unit}
            onChange={handleUnitChange}
            className="hidden"
          />
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              selectedUnit === unit
                ? "border-primary"
                : "border-gray-300 bg-white"
            }`}
          >
            {selectedUnit === unit && (
              <span className="w-full h-full bg-primary rounded-full"></span>
            )}
          </span>
          {unit}
        </label>
      ))}
    </div>
  );
};

export default UnitSelector;
