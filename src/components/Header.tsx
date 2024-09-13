import { Button } from "./ui/button";
import { SearchInput } from "./Search";

export const Header: React.FC = () => (
  <header className="p-4 flex flex-row justify-between items-center bg-[#18181B] text-[#FAFAFA] fixed top-0 left-0 right-0">
    <div className="flex items-center justify-between md:justify-start  gap-7 w-full">
      <h1 className="text-xl font-bold">character.ai</h1>
      <div className="flex gap-4 items-center">
        <Button variant="secondary" className="rounded-3xl">Sign up</Button>
        <Button variant={"default"} className="bg-[#1F1F23] rounded-3xl border border-[#212125] hover:bg-[#202024] p-5">Login</Button>
      </div>
    </div>
    <SearchInput />
  </header>
);