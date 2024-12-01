import React from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useRouter } from 'next/navigation';

interface Props {
  name: string;
  username: string;
  bio: string;
  avatarSrc: string;
  charId:string
}

export const UserProfileCard = ({ name, username, avatarSrc, charId }: Props) => {
  const router = useRouter();

  return (
   <Card className="w-full bg-[#202024] text-white border-none shadow-lg flex-grow cursor-pointer hover:scale-105 transition-all duration-300"
      onClick={() => {
        router.push("/chat/"+ charId)
      }}
    >
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="w-20 h-20   ring-gray-700">
            <AvatarImage src={avatarSrc} alt={name} className="object-cover rounded-full" />
            <AvatarFallback className="text-lg font-semibold">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-gray-400">@{username}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
