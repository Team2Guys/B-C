"use client";
import { Radio, RadioChangeEvent } from "antd";
import React from "react";

const units = ["mm", "cm", "inches"];

interface UnitSelectorProps {
  selectedUnit: string;
  setSelectedUnit: (unit: string) => void;
}

const UnitSelector: React.FC<UnitSelectorProps> = ({ selectedUnit, setSelectedUnit }) => {
  const handleUnitChange = (event: RadioChangeEvent) => {
    setSelectedUnit(event.target.value);
  };

  return (
    <Radio.Group
      onChange={handleUnitChange}
      value={selectedUnit}
      className="flex gap-2 lg:gap-6 justify-between sm:justify-start custom-radio estimator-radio"
    >
      {units.map((unit, index) => (
        <Radio key={index} value={unit} className="text-xs xsm:text-sm border border-gray-200 rounded-lg flex items-center w-40 h-10 xl:h-14 px-4 ">
          <span className="opacity-60">{unit}</span>
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default UnitSelector;
