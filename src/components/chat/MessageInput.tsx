import React, { useState } from "react";
import { Input } from "../ui/input";
import { SendHorizontal, Phone } from "lucide-react";

interface Props {
  appendText: (text: string) => void;
}

export default function MessageInput({ appendText }: Props) {
  const [inputText, setInputText] = useState("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const onSubmit = () => {
    if (inputText.trim() !== "") {
      appendText(inputText);
      setInputText("");
    }
  };

  const handlePressKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full flex items-center gap-2 py-6 px-2 max-w-3xl mx-auto">
      <div className="w-full relative">
        <Input
          onChange={onChange}
          value={inputText}
          onKeyDown={handlePressKey}
          className="rounded-3xl h-12 text-white bg-[#202024] border-none"
          placeholder="Message username"
        />
        <span
          onClick={onSubmit}
          className="p-2 absolute bg-[#FAFAFA] text-black rounded-full right-2 top-1 "
        >
          <SendHorizontal />
        </span>
      </div>
      <span className="p-2  bg-[#18181d] text-[#FAFAFA] rounded-full cursor-pointer">
        <Phone />
      </span>
    </div>
  );
}
