import React from "react";
import Navbar from "@/components/navbar";
import BlurIn from "@/components/magicui/blur-in";
import WordRotate from "@/components/magicui/word-rotate";
import MarqueeComponent from "@/components/magicui/marquee";
import HyperText from "@/components/magicui/hyper-text";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 p-4">
        <BlurIn 
          word = "Welcome to CoderDojo"
          className = "text-5xl font-extrabold text-white mb-4"
          />

        <WordRotate
          words={["Learn", "Code", "Create"]}
          className="text-6xl font-bold text-white mb-8"
        />

        <HyperText
          text="Join a global movement of free, volunteer-led coding clubs for young people!"
          className="text-2xl text-white mb-8 text-center"
        />

        <MarqueeComponent className="w-full bg-white bg-opacity-10 p-4 rounded-lg">
          <div className="flex space-x-8">
            {["HTML", "CSS", "JavaScript", "Python", "Scratch", "Unity"].map((item) => (
              <span key={item} className="text-white text-lg font-semibold">{item}</span>
            ))}
          </div>
        </MarqueeComponent>
      </div>
    </div>
  );
}

export default Home;
