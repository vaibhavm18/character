"use client"
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import ForYou from '@/components/ForYou';
import AvatarText from '@/components/AvtarText';
import Profile from '@/components/profile';
import DecisionCard from "@/components/DecisionCard"
import FeatureSelect from '@/components/FeatureSelect';
import LoginDialog from '@/components/LoginDialog';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [isLogin, setIsLogin] = useState(!true)
  const [isOpen, setIsOpen] = useState(false)

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const logout = () => {
    setIsOpen(false)
    setIsLogin(false)
  }


  return (
    <div className="h-screen overflow-hidden flex">
      <LoginDialog />
      <div className={`transition-all h-screen duration-300 bg-[#131316] ease-in-out ${isOpen ? 'w-[300px] opacity-100' : 'w-0 opacity-0'}`}>
        <Sidebar closeSidebar={closeSidebar} logout={logout}  />
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-5 overflow-y-auto">
        <Header isLogin={isLogin} setIsLogin={setIsLogin} isOpen={isOpen} setIsOpen={setIsOpen} />
        <section className="my-8">
          <h2 className="font-medium mb-4">For you</h2>
          <div className="flex gap-x-2 overflow-x-auto pb-4">
            <ForYou />
            <ForYou />
            <ForYou />
            <ForYou />
          </div>
        </section>

        <section className="my-8">
          <h2 className="font-medium mb-4">Try these</h2>
          <div className="flex gap-x-2 overflow-x-auto pb-4">
            <AvatarText heading='Heading' subText='Subtext' />
            <AvatarText heading='Heading' subText='Subtext' />
            <AvatarText heading='Heading' subText='Subtext' />
            <AvatarText heading='Heading' subText='Subtext' />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-xl mb-4">Featured</h2>
          <div className="flex gap-x-3 overflow-x-auto pb-4">
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
          </div>
        </section>

        {/* <div className="flex gap-x-3 overflow-x-auto pb-4">

        </div> */}

        <FeatureSelect />

        <section className="my-8">
          <h2 className="text-xl mb-4">Featured</h2>
          <div className="flex gap-x-3 overflow-x-auto pb-4">
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
            <DecisionCard />
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-xl mb-4">Try saying</h2>
          <div className="flex gap-x-2 overflow-x-auto pb-4">
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </div>

        </section>
      </main>
    </div>
  );
}