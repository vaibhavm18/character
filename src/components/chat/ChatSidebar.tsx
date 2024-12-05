import { ChevronLeft, Plus, Compass, Dot, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { sampleProfiles } from "../FeaturedProfile";
import { useRouter } from "next/navigation";

interface Props {
  closeSidebar: () => void;
  user_id: string;
}

export default function ChatSidebar({ closeSidebar, user_id }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [chats, setChats] = useState<number[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPrev = async () => {
      setIsLoading(true);
      const response = await fetch("/api/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id,
        }),
      });

      if (response.ok) {
        const chats = await response.json();
        console.log("Chats", chats);
        setChats(chats);
      }
      setIsLoading(false);
    };

    fetchPrev();
  }, []);

  return (
    <div className="h-full w-full flex flex-col gap-1 relative z-50 overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">character.ai</h1>
        <span
          onClick={closeSidebar}
          className="p-1 transition-all cursor-pointer hover:bg-[#1F1F22] rounded-full text-center"
        >
          <ChevronLeft />
        </span>
      </div>

      <div className=" items-center justify-center">
        <Button className="mb-2 justify-start text-lg font-light rounded-3xl bg-[#202024] hover:bg-[#3B3B41] py-4">
          <span className="flex justify-center mx-auto">
            <Plus className="mr-2  font-thin" />
            Create
          </span>
        </Button>
      </div>

      <Button className="mb-4 justify-start bg-[#131316] rounded-xl py-7  hover:bg-[#1F1F22] text-white">
        <span className="flex justify-start ">
          <Compass className="mr-2 h-4 w-4" />
          Discover
        </span>
      </Button>

      <div className="relative w-full mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-4 w-4" />
        <Input
          type="text"
          placeholder={"Search for Character"}
          className="pl-9 pr-4 py-3   bg-[#202024] text-white placeholder-white rounded-lg border-none outline-none"
        />
      </div>

      <div className="text-sm font-bold text-gray-400 mb-2">Chats</div>

      {isLoading && (
        <div className="flex justify-center items-center">
          <div className="w-6 h-6 border-4 border-t-transparent border-gray-500 border-solid rounded-full animate-spin"></div>
        </div>
      )}
      <div className="overflow-auto flex-grow space-y-2">
        {chats.map((val) => {
          return (
            <Button
              key={val}
              onClick={() => {
                router.push(`/chat/${val}`);
              }}
              className="w-full py-6 flex justify-start gap-2 rounded-2xl bg-[#26272B] hover:bg-[#262628]"
            >
              <span className="p-3 bg-white rounded-full"></span>
              <p>{sampleProfiles[val - 1].username}</p>
            </Button>
          );
        })}
      </div>

      <div className="text-xs flex justify-center items-center text-gray-500 mb-4">
        <span className="">Privacy Policy</span>
        <Dot />
        <span>Terms of Service</span>
      </div>

      <Button
        variant="default"
        className="w-full border-[1px] mb-4 hover:bg-[#131316] rounded-3xl bg-[#18181B]"
      >
        Try c.ai+
      </Button>

      <Button
        variant={"default"}
        // onClick={logout}
        className="flex items-center border-none bg-transparent rounded-xl hover:bg-[#3F3F36] py-6"
      >
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-2">
          U
        </div>
        <span className="text-sm">Username</span>
      </Button>
    </div>
  );
}
