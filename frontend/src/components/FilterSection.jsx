import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import React from "react";

function FilterSection() {
  const fitlerData = [
    {
      fitlerType: "Location",
      array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
    },
    {
      fitlerType: "Industry",
      array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
    },
    {
      fitlerType: "Salary",
      array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
    },
  ];
  function selectedValue() {}
  function changeHandler() {}

  return (
    <div className="">
      <div className="border p-6 rounded-lg">
        <h1 className="font-semibold mb-2">All Filters</h1>
        
        <RadioGroup >
          {fitlerData.map((data, index) => (
            <div className="flex flex-col gap-1 pt-2">
              <hr />
              <h1 className="text-lg font-semibold">{data.fitlerType}</h1>
              {data.array.map((item, idx) => {
                const ItemId = `id${index}-${idx}`;
                return (
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={item} id={ItemId} className='rounded-sm border-gray-400 border-2 ' />
                    <Label className="text-base " htmlFor={ItemId}>{item}</Label>
                  </div>
                );
              })}
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

export default FilterSection;
