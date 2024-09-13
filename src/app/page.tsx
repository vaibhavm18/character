import React from 'react';
import { Header } from '@/components/Header';
import ForYou from '@/components/ForYou';
import AvatarText from '@/components/AvtarText';
import Profile from '@/components/profile';
import DecisionCard from "@/components/DecisionCard"
import FeatureSelect from '@/components/FeatureSelect';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="w-full max-w-7xl mx-auto px-4 py-5 mt-20">
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