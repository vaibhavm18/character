
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter} from "@/components/ui/card"


const LoginComponent: React.FC = () => {
 
  return (
    <Card className="w-full bg-transparent border-none text-[#F2F2F3]">
      <CardContent className="pt-6">
        <h2 className="text-xl font-[50] text-center mb-2">Character AI</h2>
        <h2 className="text-lg font-[50] text-center mb-6">Create an account or Sign in</h2>
        <div className="space-y-4">
          <Button variant="outline" className="w-full bg-[#2F3035] text-[#F2F2F3] border-none hover:bg-[#2F3035] hover:text-[#F2F2F3]  hover:text-opacity-70 rounded-2xl">
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full bg-[#2F3035] text-[#F2F2F3] border-none hover:bg-[#2F3035] hover:text-[#F2F2F3]  hover:text-opacity-70 rounded-2xl">
            Continue with Apple
          </Button>
          <div className="relative">
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-gray-500">OR</span>
            </div>
          </div>
          <Input type="email" placeholder="Email" className=" border-none bg-[#18181B]  text-white rounded-2xl" />
          <Input type="password" placeholder="Password" className=" border-none bg-[#18181B]  text-white rounded-2xl" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        {/* <Button variant="link" className="text-gray-400 hover:text-gray-300">Trouble signing in?</Button> */}
        <p className=" text-gray-500 mt-4 text-center w-[280px]">
          By continuing, you agree to our Terms and acknowledge our Privacy Policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginComponent;