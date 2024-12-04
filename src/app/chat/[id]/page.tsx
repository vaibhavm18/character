"use client";
import React, { useEffect, useState } from "react";
import Chat, { ChatType } from "@/components/Chat";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [initialChats, setInitialChats] = useState<ChatType[]>([]);

  useEffect(() => {
    async function getUser() {
      setIsLoading(true);
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        console.log("Data", data.user);
        setId(data.user.id);
        setUsername(data.user.email || "");
        const response = await fetch("/api/get-messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: data.user.id,
            chat_id: parseInt(params.id, 10),
          }),
        });

        if (response.ok) {
          const chats = await response.json();
          console.log("Chats", chats);
          setInitialChats(chats)
        }
      } else {
        redirect("/");
      }

      setIsLoading(false);
    }

    getUser();
  }, [params.id]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Chat
          params={params}
          id={id}
          username={username}
          initialChats={initialChats}
        />
      )}
    </>
  );
}
