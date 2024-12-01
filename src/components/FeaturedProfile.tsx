"use client";
import React, { useEffect, useState } from "react";
import { UserProfileCard } from "./DecisionCard";



export const sampleProfiles = [
  {
    charId: "1",
    name: "Nicki Minaj",
    username: "Bestie",
    bio: "I'm a rapper, I'm a rapper,  ",
    followers: "20.9m",
    avatarSrc: "/api/placeholder/100/100",
  },
  {
    charId: "2",
    name: "Donald trump",
    username: "maga",
    bio: "Precedent of USA",
    followers: "59.3m",
    avatarSrc: "/api/placeholder/100/100",
  },
  {
    charId: "3",
    name: "Taylor Swift",
    username: "taylorswift13",
    bio: "I'm a singer-songwriter. Welcome to the Eras Tour!",
    followers: "94.5m",
    avatarSrc: "/api/placeholder/100/100",
  },
  {
    charId: "4",
    name: "Elon Musk",
    username: "elonmusk",
    bio: "Technoking of Tesla, Chief Twit of Twitter",
    followers: "134.7m",
    avatarSrc: "/api/placeholder/100/100",
  },
  {
    charId: "5",
    name: "Virat Kohli",
    username: "vk",
    bio: "Cricketer, husband, father",
    followers: "15.8m",
    avatarSrc: "/api/placeholder/100/100",
  },
];

type Chars = {
  name: string;
  charId: string;
  username: string;
  followers: string;
  avatarSrc: string;
  bio: string;
};

interface Props {
  profiles: Chars[];
}

export default function FeaturedProfile() {
  // const [characters, setCharacters] = useState<Chars[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   async function getCharacters() {
  //     if(isLoading === false) {
  //       return
  //     }
  //     try {
  //       const res = await fetch(`/api/get-data`);
  //       if (!res.ok) {
  //         throw Error("Something went wrong.");
  //       }
  //       const chars = await res.json();
  //       setCharacters(chars.data);
  //       console.log("Data", chars.data);
  //     } catch (error) {
  //       console.log("Error", error);
  //       setCharacters([]);
  //     }
  //     setIsLoading(false);
  //   }
  //   getCharacters();
  // }, []);

  return (
    <div className="flex gap-x-3 overflow-x-auto pb-4">
      {sampleProfiles.map((profile, index) => (
        <UserProfileCard
          charId={profile.charId}
          key={index}
          name={profile.name}
          username={profile.username}
          bio={profile.bio}
          // avatarSrc={profile.avatarSrc}
          avatarSrc="https://xmcnkidsduwrxqepihxp.supabase.co/storage/v1/object/public/images/1728149806811-aisha-patel.png"
        />
      ))}
    </div>
  );
}
