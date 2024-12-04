"use client";
import { Dialog } from "@radix-ui/react-dialog";
import React from "react";
import { DialogContent } from "./ui/dialog";
import LoginComponent from "./Login";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginDialog({ isOpen, setIsOpen, setIsLogin }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-[#26272B] rounded-3xl">
        <LoginComponent setDialogOpen={setIsOpen} setIsLogin={setIsLogin} />
      </DialogContent>
    </Dialog>
  );
}
