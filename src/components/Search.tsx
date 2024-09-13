import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput: React.FC = () => {
  return (
    <div className="relative hidden md:block w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
      <Input
        type="text"
        placeholder="Search"
        className="pl-9 pr-4 py-3 w-full bg-[#202024] text-white placeholder-white rounded-3xl border-none outline-none"
      />
    </div>
  );
};