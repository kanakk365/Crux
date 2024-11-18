import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/store/Slice/jobSlice";
import { Button } from "./ui/button";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];
function FilterSection() {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  function changeHandler(value) {
    setSelectedValue(value);
  }

  useEffect(() => {
    dispatch(setSearchQuery(selectedValue));
  }, [selectedValue]);

  const clearHandler = ()=>{
    dispatch(setSearchQuery(""))
  }

  return (
    <div className="">
      <div className="border p-6 rounded-lg">
        <div className="flex justify-between">
          <h1 className="font-semibold mb-2">All Filters</h1>
          <Button onClick={clearHandler} className="h-8 text-sm px-3" >Clear</Button>
        </div>

        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
          {filterData.map((data, index) => (
            <div className="flex flex-col gap-1 pt-2">
              <hr />
              <h1 className="text-lg font-semibold">{data.filterType}</h1>
              {data.array.map((item, idx) => {
                const ItemId = `id${index}-${idx}`;
                return (
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value={item}
                      id={ItemId}
                      className="rounded-sm border-gray-400 border-2 "
                    />
                    <Label className="text-base " htmlFor={ItemId}>
                      {item}
                    </Label>
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
