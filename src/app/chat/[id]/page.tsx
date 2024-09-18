"use client";
import ChatSidebar from "@/components/chat/ChatSidebar";
import Header from "@/components/chat/Header";
import Message from "@/components/chat/Message";
import MessageInput from "@/components/chat/MessageInput";
import Sidebars from "@/components/chat/Sidebars";
import UserProfileComponent from "@/components/chat/UserProfileSidebar";
import { Button } from "@/components/ui/button";
import { avengersConversation } from "@/lib/data";
import { Menu } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type MessageType = {
  username: string;
  content: string;
  isAI: boolean;
  shouldStream?: boolean;
};

export default function Page() {
  const [chatSidebar, setChatSidebar] = useState(true);
  const [profileSidebar, setProfileSidebar] = useState(false);

  const [userAddedText, setUserAddedText] = useState<MessageType[]>([]);

  const appendText = (text: string) => {
    setUserAddedText((prev) => {
      return [
        ...prev,
        { content: text, isAI: false, username: "Tony Stark" },
        { content: text, isAI: true, username: "JARVIS", shouldStream: true },
      ];
    });
  };

  const openProfileSidebar = () => {
    setProfileSidebar(true);
  };

  // const closeProfileSidebar = () => {
  //   setProfileSidebar(false);
  // };

  const openChatSidebar = () => {
    console.log("Hello God!");
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
  }, [userAddedText]);

  return (
    <main className="relative bg-[#18181B] flex justify-between overflow-hidden h-screen">
      <Sidebars
        chatSidebar={chatSidebar}
        profileSidebar={profileSidebar}
        setChatSidebar={setChatSidebar}
        setProfileSidebar={setProfileSidebar}
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
          {avengersConversation.map((val) => {
            return (
              <Message
                key={val.content}
                content={val.content}
                isAI={val.isAI}
                username={val.username}
              />
            );
          })}
          {userAddedText.map((val, i) => {
            return (
              <Message
                key={val.content + i}
                content={val.content}
                isAI={val.isAI}
                username={val.username}
                shouldStream={val.shouldStream}
              />
            );
          })}
          <div className="" ref={messagesEndRef}></div>
        </div>
        <div className="sticky bg-[#18181B] bottom-0 left-2 right-1 z-40 ">
          <MessageInput appendText={appendText} />
          {/* <p>Remember: Everything Characters say is made up!</p> */}
        </div>
      </div>
      <div
        className={`w-[400px] hidden 2xl:block p-6 border-l-[0.2px] border-gray-700 relative z-50`}
      >
        <UserProfileComponent />
      </div>
    </main>
  );
}
