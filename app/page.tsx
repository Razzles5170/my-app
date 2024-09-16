import React from "react";
import Navbar from "@/components/navbar";
import { ChevronRight } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";
import WordRotate from "@/components/magicui/word-rotate";
import MarqueeComponent from "@/components/magicui/marquee";
import HyperText from "@/components/magicui/hyper-text";
import AnimatedGradient from "@/components/magicui/animated-gradient-text";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
      <AnimatedGradient className="text-5xl font-extrabold text-black-mb4 bg-gradient-to-r from-[#c0c0c0] via-[#a0a0a0] to-[#c0c0c0] bg-clip-text text-transparent animate-gradient">
        Welcome to CoderDojo
      </AnimatedGradient>
      <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />

      

        <WordRotate
          words={["Learn", "Code", "Create"]}
          className="text-6xl font-bold text-black mb-8"
        />

        <HyperText
          text="Join a global movement of free, volunteer-led coding clubs for young people!"
          className="text-2xl text-black mb-8 text-center"
        />

        <MarqueeComponent className="w-full bg-white bg-opacity-10 p-4 rounded-lg">
          <div className="flex space-x-8">
            {["HTML", "CSS", "JavaScript", "Python", "Scratch", "Unity","Raspberry Pi"].map((item) => (
              <span key={item} className="text-black text-lg font-semibold">{item}</span>
            ))}
          </div>
        </MarqueeComponent>
      </div>
    </div>
  );
}

export default Home;
