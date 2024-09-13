import React from 'react';
import { Card, CardContent, CardFooter } from "./ui/card";
import { MessageSquare } from "lucide-react";

const DecisionCard = () => {
  return (
    <Card className="w-64 hover:bg-[#2A2A2D] bg-[#202024] transition-all cursor-pointer text-white overflow-hidden flex-shrink-0">
      <div className="relative h-32 bg-gradient-to-br from-yellow-500 to-orange-600">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-zinc-800 rounded-tr-full"></div>
      </div>
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-1">DecisionHelper</h2>
        <p className="text-sm text-zinc-400 mb-3">By @greg</p>
        <p className="text-sm">Hello! I&#39;m ready to help you work through any of the difficult choices you face in lif...</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center text-zinc-400">
        <MessageSquare size={16} />
        <span className="ml-1 text-sm">6.5m</span>
      </CardFooter>
    </Card>
  );
};

export default DecisionCard;