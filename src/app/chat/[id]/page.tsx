"use client";
import ChatSidebar from "@/components/chat/ChatSidebar";
import Header from "@/components/chat/Header";
import Message from "@/components/chat/Message";
import MessageInput from "@/components/chat/MessageInput";
import Sidebars from "@/components/chat/Sidebars";
import UserProfileComponent from "@/components/chat/UserProfileSidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { sampleProfiles } from "@/components/FeaturedProfile";

type ChatType = {
  role: "user" | "assistant";
  content: string;
};

type Props = {
  params: {
    id: string;
  };
};



export default function Page({params}:Props) {
  const [chatSidebar, setChatSidebar] = useState(true);
  const [profileSidebar, setProfileSidebar] = useState(false);

  const [chat, setChat] = useState<ChatType[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isChatLoadin, setIsChatLoading] = useState(true);

  const { toast } = useToast();

  const productId = parseInt(params.id, 10);

  if(productId < 1 || productId > 5) {
    return <>Invalid id</>
  }


  const appendText = async (text: string) => {
    setChat((prev) => [...prev, { content: text, role: "user" }]);
    setIsLoading(true);
    try {
      const res = await axios.post("/api/message", {
        messages: [...chat, { content: text, role: "user" }],
        name: sampleProfiles[productId-1].name,
      });
      setChat((prev) => [
        ...prev,
        { content: res?.data?.message, role: "assistant" },
      ]);
    } catch (error) {
      console.log("Error", error);
      setChat((prev) => prev.slice(0, -1));
      toast({
        title: "Something went wrong.",
        description: "Please message again.",
      });
    }
    setIsLoading(false);
  };

  const openProfileSidebar = () => {
    setProfileSidebar(true);
  };

  const openChatSidebar = () => {
    setChatSidebar(true);
  };

  const closeChatSidebar = () => {
    setChatSidebar(false);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <main className="relative bg-[#18181B] flex justify-between overflow-hidden h-screen">
      <Toaster />
      <Sidebars
        chatSidebar={chatSidebar}
        profileSidebar={profileSidebar}
        setChatSidebar={setChatSidebar}
        setProfileSidebar={setProfileSidebar}
        id={productId}
      />
      <div className="fixed bg-[#18181B] top-0 left-0 right-0 z-40 2xl:hidden">
        <Header
          openChatSidebar={openChatSidebar}
          openProfileSidebar={openProfileSidebar}
        />
      </div>
      {!chatSidebar && (
        <Button
          onClick={openChatSidebar}
          className="hidden bg-transparent hover:bg-transparent 2xl:block absolute top-2  z-50"
        >
          <Menu />
        </Button>
      )}
      <div
        className={`transition-all h-screen duration-300 bg-[#131316] py-4 px-4 hidden 2xl:block ease-in-out ${
          chatSidebar ? "w-[300px] opacity-100" : "w-0 opacity-0"
        }`}
      >
        <ChatSidebar closeSidebar={closeChatSidebar} />
      </div>
      <div className="overflow-auto flex-grow relative">
        <div className="my-24 flex-grow px-4 w-full max-w-3xl mx-auto ">
          <div className="h-screen"></div>
          {chat.map((val, i) => {
            return (
              <Message
                key={val.content + i}
                content={val.content}
                isAI={val.role === "assistant"}
                username={
                  val.role === "user"
                    ? "Username"
                    : sampleProfiles[productId - 1].name
                }
                shouldStream={val.role === "assistant"}
              />
            );
          })}

          <div className="" ref={messagesEndRef}></div>
        </div>
        <div className="sticky bg-[#18181B] bottom-0 left-2 right-1 z-40 ">
          <MessageInput isLoading={isLoading} appendText={appendText} />
        </div>
      </div>
      <div
        className={`w-[400px] hidden 2xl:block p-6 border-l-[0.2px] border-gray-700 relative z-50`}
      >
        <UserProfileComponent id={productId} />
      </div>
    </main>
  );
}
