"use client"
import React, { useState } from 'react';
import { Button } from "./ui/button";


const buttonsMap = ["Assistants",
  "Anime",
  "Creativity & Writing",
  "Entertainment & Gaming",
  "History",
  "Humor",
  "Learning",
  "Lifestyle",
  "Parody",
] 


const SelectableButtonRow = () => {
  const [selectedButton, setSelectedButton] = useState<string>("Assistants");

  return (
    <div className="flex flex-wrap gap-2">
      {buttonsMap.map((val) => (
        <Button
          key={val}
          onClick={() => setSelectedButton(val)}
          variant={selectedButton === val ? "secondary" : "default"}
          className={`${selectedButton !== val && "bg-[#26272B] hover:bg-[#26272B] text-gray-400 hover:text-white transition-all"}`}
        >
          {val}
        </Button>
      ))}
    </div>
  );
};

export default SelectableButtonRow;