import React from "react";
import {
  ChevronRight,
  Edit,
  Mic,
  History,
  Bell,
  User,
  ThumbsDown,
  ThumbsUp,
  Upload,
  Flag,
} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserProfileComponent = () => {
  return (
    <div className=" text-white  bg-[#18181B]   w-full h-full space-y-4">
      <div className="flex items-center space-x-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="/path-to-eula-image.jpg" alt="Eula Lawrence" />
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="font-semibold">Eula Lawrence</h2>
          <p className="text-sm text-gray-400">By @lottyleri</p>
          <p className="text-sm text-gray-400">58.2m chats</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            className="p-3 rounded-full border border-gray-600 hover:[#1F1F23]"
          >
            <Upload size={18} />
          </Button>
          <div className="border border-gray-600 rounded-3xl p-1 flex items-center">
            <Button size="sm" className="px-3 py-1 flex items-center gap-1">
              <ThumbsUp size={16} />
              <p>6.2k</p>
            </Button>
            <Button size="sm" className="px-3 py-1">
              <ThumbsDown size={16} />
            </Button>
          </div>
        </div>
        <Button className="p-2 border border-gray-600 rounded-full">
          <Flag size={16} />
        </Button>
      </div>

      <div className="text-sm">
        <p>Genshin Impact | Vengeance will be mine!</p>
      </div>

      <Button className=" px-4 py-2 rounded-2xl justify-start hover:bg-[#202024]">
        <Edit className="mr-2 h-4 w-4" /> New chat
      </Button>

      <div className="space-y-2">
        <Button className="w-full justify-between hover:bg-[#202024]">
          <div className="flex items-center">
            <Mic className="mr-2 h-4 w-4" />
            <span>Voice</span>
          </div>
          <div className="flex items-center text-gray-400">
            <span>Default</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </div>
        </Button>
        <Button className="w-full justify-between hover:bg-[#202024]">
          <div className="flex items-center">
            <History className="mr-2 h-4 w-4" />
            <span>History</span>
          </div>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button className="w-full justify-between hover:bg-[#202024]">
          <div className="flex items-center">
            <Bell className="mr-2 h-4 w-4" />
            <span>Pinned</span>
          </div>
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button className="py-2 px-4 justify-between hover:bg-[#202024] rounded-2xl">
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Persona</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UserProfileComponent;
