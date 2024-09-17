import React from 'react';
import { Button } from "@/components/ui/button"
import { Compass, ChevronLeft, Plus } from "lucide-react"

interface Props {
  closeSidebar: () => void
  logout: () => void
}

const Sidebar = ({ closeSidebar, logout }: Props) => {
  return (
    <div className="h-full w-full flex flex-col py-4 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-xl font-bold">character.ai</h1>
        <span onClick={closeSidebar} className='p-1 transition-all cursor-pointer hover:bg-[#1F1F22] rounded-full text-center'>
          <ChevronLeft />
        </span>
      </div>

      <Button className="mb-2 justify-start text-lg font-light rounded-3xl bg-[#202024] hover:bg-[#3B3B41] " >
        <span className='flex justify-center mx-auto'>
          <Plus className="mr-2  font-thin" />
          Create
        </span>
      </Button>

      <Button className="mb-4 w-full justify-start bg-[#26272B] hover:bg-[#1F1F22] text-white " variant="secondary">
        <span className='flex justify-center mx-auto'>
          <Compass className="mr-2 h-4 w-4" />
          Discover
        </span>
      </Button>

      <div className="text-sm font-bold text-gray-400 mb-2">Chats</div>

      <div className="flex-grow"></div>

      <div className="text-xs flex justify-center text-gray-500 mb-4">
        <span className="mr-2">Privacy Policy</span>
        <span>Terms of Service</span>
      </div>

      <Button variant="default" className="w-full border-[1px] mb-4 hover:bg-[#131316] rounded-3xl bg-[#18181B]">
        Try c.ai+
      </Button>

      <Button variant={"default"} onClick={logout} className="flex items-center border-none bg-transparent rounded-xl hover:bg-[#3F3F36] py-6">
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">
          U
        </div>
        <span className="text-sm">Username</span>
      </Button>
    </div>
  );
};

export default Sidebar;