import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Props {
  placeholder?: string
  hide?: boolean
}

export const SearchInput: React.FC<Props> = ({placeholder = "Search", hide=true}) => {
  return (
    <div className={"relative md:block " + `${hide && "hidden"}`}>
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-9 pr-4 py-3 w-[150px] md:w-[300px] lg:w-[600px] bg-[#202024] text-white placeholder-white rounded-3xl border-none outline-none"
      />
    </div>
  );
};