import { supabase } from "./supabase";

export const handleLogout = async () => {
  const { error } = await supabase.auth.signOut();
  console.log("Error", error);
  if (error) {
    throw new Error("Error logout.");
  }

  return "Success";
};

export const handleEmailSignup = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
};

export const handleEmailLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const handleGoogleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });

  return { data, error };
};

export const handleAppleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "apple",
  });
  return { data, error };
};
