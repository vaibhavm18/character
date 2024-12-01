import React, { useEffect, useState } from "react";
import { Sheet, SheetContent } from "../ui/sheet";
import ChatSidebar from "./ChatSidebar";
import UserProfileComponent from "./UserProfileSidebar";

interface Props {
  chatSidebar: boolean;
  profileSidebar: boolean;
  setChatSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  id:number;
  setProfileSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebars({
  chatSidebar,
  profileSidebar,
  setChatSidebar,
  setProfileSidebar,
  id
}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsVisible(window.innerWidth < 1536);
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);

    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const closeSidebar = () => {
    setChatSidebar(false);
  };

  return (
    <>
      {isVisible && (
        <>
          <Sheet open={chatSidebar}>
            <SheetContent
              close={false}
              side={"left"}
              className="bg-[#131316] 2xl:hidden border-none"
            >
              <ChatSidebar closeSidebar={closeSidebar} />
            </SheetContent>
          </Sheet>
          <Sheet open={profileSidebar} onOpenChange={setProfileSidebar}>
            <SheetContent
              close={false}
              side={"right"}
              className="bg-[#18181B] 2xl:hidden border border-gray-600"
            >
              <UserProfileComponent id={id} />
            </SheetContent>
          </Sheet>
        </>
      )}
    </>
  );
}
