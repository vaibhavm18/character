import React from 'react';
import { Button } from "@/components/ui/button"
import { PlusCircle, Compass, ChevronLeft } from "lucide-react"

interface Props {
  closeSidebar: () => void
}

const Sidebar = ({ closeSidebar }: Props) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex items-center mb-8">
        <h1 className="text-xl font-bold">character.ai</h1>
        <Button variant="ghost" size="icon" onClick={closeSidebar} className="ml-auto">
          <ChevronLeft />
        </Button>
      </div>

      <Button className="mb-2 w-full justify-start" variant="ghost">
        <PlusCircle className="mr-2 h-4 w-4" />
        Create
      </Button>

      <Button className="mb-4 w-full justify-start" variant="secondary">
        <Compass className="mr-2 h-4 w-4" />
        Discover
      </Button>

      <div className="text-sm font-bold text-gray-400 mb-2">Chats</div>

      <div className="flex-grow"></div>

      <div className="text-xs flex justify-center text-gray-500 mb-4">
        <span className="mr-2">Privacy Policy</span>
        <span>Terms of Service</span>
      </div>

      <Button variant="outline" className="w-full mb-4 border rounded-3xl">
        Try c.ai+
      </Button>

      <Button variant={"outline"} className="flex items-center border rounded-xl py-6">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">
          U
        </div>
        <span className="text-sm">Username</span>
      </Button>
    </div>
  );
};

export default Sidebar;