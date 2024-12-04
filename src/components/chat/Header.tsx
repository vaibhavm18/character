import { AudioLines, Ellipsis, Menu } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  openChatSidebar: () => void;
  openProfileSidebar: () => void;
  username:string
}

export default function Header({ openChatSidebar, openProfileSidebar , username}: Props) {
  return (
    <header className="w-full flex justify-between items-center px-4 py-2 relative z-20">
      <div className="flex items-center gap-4">
        <Button className="" onClick={openChatSidebar}>
          <Menu />
        </Button>
        <div className="flex items-center gap-2">
          <span className="p-6 rounded-full bg-white"></span>
          <div className="flex flex-col items-start">
            <p>Username User</p>
            <p>by @{username}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <AudioLines />
        <Button onClick={openProfileSidebar}>
          <Ellipsis />
        </Button>
      </div>
    </header>
  );
}
