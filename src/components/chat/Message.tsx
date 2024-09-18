import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

interface Props {
  username: string;
  content: string;
  isAI: boolean;
}
const Message = ({ content, isAI, username }: Props) => (
  <div
    className={`flex flex-col gap-2 mb-4 group ${
      isAI ? "items-start" : "items-end"
    }`}
  >
    <div
      className={`flex items-center ${isAI ? "flex-row" : "flex-row-reverse"}`}
    >
      <Avatar className="h-8 w-8 mx-2">
        <AvatarImage src="/path-to-eula-image.jpg" alt="Eula Lawrence" />
        <AvatarFallback>EL</AvatarFallback>
      </Avatar>
      <span>{username}</span>
      {isAI && (
        <>
          <span className="ml-2">c.ai</span>
          <Button
            size={"icon"}
            className={`opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200
               text-[#6590E9]`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width={22}
              height={22}
              className="fill-current"
            >
              <path d="M30,20 L80,50 L30,80 Z" />
            </svg>
          </Button>
        </>
      )}
    </div>
    <p
      className={`max-w-[70%] mx-9 p-2 rounded-xl bg-[#26272B] ${
        isAI ? " self-start" : " self-end"
      }`}
    >
      {content}
    </p>
  </div>
);
export default Message;

// ${isAI ? "justify-start" : "justify-end"}
