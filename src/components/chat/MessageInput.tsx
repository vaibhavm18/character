import React from "react";
import { Input } from "../ui/input";
import { SendHorizontal, Phone } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="w-full flex items-center gap-2 py-6 px-2 max-w-3xl mx-auto">
      <div className="w-full relative">
        <Input
          className="rounded-3xl h-12 text-white bg-[#202024] border-none"
          placeholder="Message username"
        />
        <span className="p-2 absolute bg-[#FAFAFA] text-black rounded-full right-2 top-1 ">
          <SendHorizontal />
        </span>
      </div>
      <span className="p-2  bg-[#18181d] text-[#FAFAFA] rounded-full cursor-pointer">
        <Phone />
      </span>
    </div>
  );
}
