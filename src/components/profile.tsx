import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const Profile = () => {
  return (
    <Card className="w-full flex-shrink-0 max-w-md bg-[#202024] text-white border-none ">
      <CardHeader className="flex flex-row items-center justify-start gap-4 py-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" alt="Profile picture" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center'>
          <h2 className="text-lg font-bold">Elon Musk</h2>
          <p className="text-sm text-gray-400">@elonwhisperer • 39.7m chats • 4,865 likes</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 p-4">
        <p className=" bg-[#26272B] hover:bg-[#313135] cursor-pointer p-2 rounded-lg">Why did you buy twitter?</p>
        <p className=" bg-[#26272B] hover:bg-[#313135] cursor-pointer p-2 rounded-lg">What do you think about Jeff Bezos&#39; Blue Origin?</p>
        <p className=" bg-[#26272B] hover:bg-[#313135] cursor-pointer p-2 rounded-lg">If you could time travel, when/where would you go?</p>
      </CardContent>
    </Card>
  );
};

export default Profile;