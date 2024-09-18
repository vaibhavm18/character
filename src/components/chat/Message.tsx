import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  username: string;
  content: string;
  isAI: boolean;
}
const Message = ({ content, isAI, username }: Props) => (
  <div
    className={`flex flex-col gap-2 mb-4 ${isAI ? "items-start" : "items-end"}`}
  >
    <div className={`flex items-center ${isAI ? "flex-row" : "flex-row-reverse"}`}>
      <Avatar className="h-8 w-8 mx-2">
        <AvatarImage src="/path-to-eula-image.jpg" alt="Eula Lawrence" />
        <AvatarFallback>EL</AvatarFallback>
      </Avatar>
      <span>{username}</span>
      {isAI && <span className="ml-2" >c.ai</span>}
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
