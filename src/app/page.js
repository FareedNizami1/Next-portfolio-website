'use client'
import Image from "next/image";
import bg from "../../public/background/home-background.jpg";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";
import { TypingEffect } from "@/components/Typing";
import { useState } from "react";


import dynamic from "next/dynamic";
// import Iron from "@/components/models/Iron";
const Iron = dynamic(() => import("@/components/models/Iron"), {
  ssr: false,
});
const Spider = dynamic(() => import("@/components/models/Spider"), {
    ssr: false,
  });

export default function Home() {
     const [currentModel, setCurrentModel] = useState('iron');
    
      const toggleModel = () => {
        setCurrentModel(prev => (prev === 'iron' ? 'spider' : 'iron'));
      };
  return (
    <main className="flex h-screen flex-col items-center justify-between relative">
        <Image priority sizes="100vw" src={bg} alt="background-image"fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
        />
        <TypingEffect/> 
        <Navigation  />

      <div className="w-full h-screen">
        <RenderModel>
          {currentModel === 'iron' ? <Iron /> : <Spider />}
        </RenderModel>
      </div>

      <div className="z-50 absolute bottom-20">  
        <button onClick={toggleModel} className="px-6 py-3 bg-black/40 text-white rounded-full shadow-md hover:bg-black/90 transition-all">
            {currentModel === 'iron' ? 'Change character' : 'Change character'}
        </button>
      </div>
      
    </main>
  );
}