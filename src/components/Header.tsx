"use client"
import { Button } from "./ui/button";
import { SearchInput } from "./Search";
import { Dispatch, SetStateAction } from "react";
import UserAvatar from "./UserAvtar";
import { Menu } from "lucide-react";

interface Props {
  isLogin: boolean
  setIsLogin: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const Header: React.FC<Props> = ({isLogin,setIsLogin, setIsOpen}) => {

  const openSideBar = () => {
    setIsOpen(true)
  }

 
  const login = () => {
    setIsLogin(true)
  }

  return (

    <>
      {!isLogin ? <>
        <header className="p-4 flex flex-row justify-between items-center bg-[#18181B] text-[#FAFAFA] fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between md:justify-start  gap-7 w-full">
            <h1 className="text-xl font-bold">character.ai</h1>
            <div className="flex gap-4 items-center">
              <Button variant="secondary" className="rounded-3xl">Sign up</Button>
              <Button variant={"default"} className="bg-[#1F1F23] rounded-3xl border border-[#212125] hover:bg-[#202024] p-5" onClick={login}>Login</Button>
            </div>
          </div>
          <SearchInput />
        </header>
        <div className="mb-20"></div>
      </> : <>
      <header className="max-w-7xl w-full mx-auto pt-2 pb-8 flex justify-between items-center">
          <div className="space-y-2 hidden lg:flex flex-col">
            <h1>Welcome Back</h1>
            <UserAvatar username="Username" />
          </div>
          <Button className="bg-transparent hover:bg-transparent lg:hidden" onClick={openSideBar}>
            <Menu />
          </Button>
          <div className=" flex items-center justify-between gap-6 w-full max-w-md">
            <Button className="bg-transparent hover:bg-transparent hidden lg:block" onClick={openSideBar}>
              <Menu />
            </Button>
            <SearchInput placeholder="Search for Character" />
          </div>
        </header>
      </>}
    </>
  )
};

{
  /* 

    isLogin ? <header className="max-w-7xl w-full mx-auto pt-4 px-4 lg:pt-8 flex justify-between items-center">
          <Sheet open={isOpen}>
            <SheetContent close={false} side={"left"} className="bg-[#131316]" >
              <Sidebar closeSidebar={closeSidebar} />
            </SheetContent>
          </Sheet>
          <div className="space-y-2 hidden lg:flex flex-col">
            <h1>Welcome Back</h1>
            <UserAvatar username="Username" />
          </div>
          <Button className="bg-transparent hover:bg-transparent lg:hidden" onClick={openSideBar}>
            <Menu />
          </Button>
          <div className=" flex items-center justify-between gap-6 w-full max-w-md">
            <Button className="bg-transparent hover:bg-transparent hidden lg:block" onClick={openSideBar}>
              <Menu />
            </Button>
            <SearchInput placeholder="Search for Character" />
          </div>
        </header> :
     
  */
}