import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  handleEmailLogin,
  handleEmailSignup,
  handleGoogleLogin,
} from "@/lib/auth";

interface Props {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginComponent: React.FC<Props> = ({ setDialogOpen, setIsLogin }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    if (!details.email || !details.password) {
      return;
    }
    setIsLoading(true);
    try {
      const { data, error } = await handleEmailSignup({
        email: details.email,
        password: details.password,
      });
      if (error) throw error;
      console.log( "Data", data)
      setDialogOpen(false);
      setIsLogin(true);
    } catch (error) {}
    setIsLoading(false);
  };

  const handleLogin = async () => {
    if (!details.email || !details.password) {
      return;
    }
    setIsLoading(true);
    try {
      const { data, error } = await handleEmailLogin({
        email: details.email,
        password: details.password,
      });
      if (error) throw error;
            console.log("Data", data);
      setDialogOpen(false);
      setIsLogin(true);
    } catch (error) {}

    setIsLoading(false);
  };
  return (
    <Card className="w-full bg-transparent border-none text-[#F2F2F3]">
      <CardContent className="pt-6">
        <h2 className="text-xl font-[50] text-center mb-2">Character AI</h2>
        <h2 className="text-lg font-[50] text-center mb-6 flex gap-3 justify-center">
          <p
            className="hover:underline cursor-pointer"
            onClick={() => {
              setDetails({ email: "", password: "" });
              setShowLogin(false);
            }}
          >
            {" "}
            Create an account{" "}
          </p>{" "}
          or{" "}
          <p
            className="hover:underline cursor-pointer"
            onClick={() => {
              setDetails({ email: "", password: "" });
              setShowLogin(true);
            }}
          >
            {" "}
            Sign in{" "}
          </p>
        </h2>
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={handleGoogleLogin}
            className="w-full bg-[#2F3035] text-[#F2F2F3] border-none hover:bg-[#2F3035] hover:text-[#F2F2F3]  hover:text-opacity-70 rounded-2xl"
          >
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full bg-[#2F3035] text-[#F2F2F3] border-none hover:bg-[#2F3035] hover:text-[#F2F2F3]  hover:text-opacity-70 rounded-2xl"
          >
            Continue with Apple
          </Button>
          <div className="relative">
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 text-gray-500">OR</span>
            </div>
          </div>

          {showLogin ? (
            <>
              <Input
                type="email"
                placeholder="Email"
                className=" border-none bg-[#18181B]  text-white rounded-2xl"
                onChange={(e) => {
                  setDetails((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                className=" border-none bg-[#18181B]  text-white rounded-2xl"
                onChange={(e) => {
                  console.log("e", e.target.value);
                  setDetails((prev) => ({ ...prev, password: e.target.value }));
                }}
              />
              <div className="w-full">
                <Button
                  disabled={isLoading}
                  onClick={handleLogin}
                  className="w-full"
                >
                  Login
                </Button>
              </div>
            </>
          ) : (
            <>
              <Input
                type="email"
                placeholder="Email"
                className=" border-none bg-[#18181B]  text-white rounded-2xl"
                onChange={(e) => {
                  setDetails((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
              <Input
                type="password"
                placeholder="Password"
                className=" border-none bg-[#18181B]  text-white rounded-2xl"
                onChange={(e) => {
                  console.log("e", e.target.value);
                  setDetails((prev) => ({ ...prev, password: e.target.value }));
                }}
              />
              <div className="w-full">
                <Button
                  disabled={isLoading}
                  onClick={handleSignup}
                  className="w-full"
                >
                  Signup
                </Button>
              </div>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        {/* <Button variant="link" className="text-gray-400 hover:text-gray-300">Trouble signing in?</Button> */}
        <p className=" text-gray-500 mt-4 text-center w-[280px]">
          By continuing, you agree to our Terms and acknowledge our Privacy
          Policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginComponent;
