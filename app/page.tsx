import React from "react";
import Navbar from "@/components/navbar";
import HeroVideo from "@/components/magicui/hero-video-dialog"; // Ensure this is correctly imported
import WordRotate from "@/components/magicui/word-rotate";
import MarqueeComponent from "@/components/magicui/marquee";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import WordPullup from "@/components/magicui/word-pull-up"; 
import AnimatedList from "@/components/magicui/animated-list"; 
import Particles from "@/components/magicui/particles"; 
import Confetti from "@/components/magicui/confetti"; 
import Link from 'next/link';

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Video */}
      <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <HeroVideo 
          videoSrc="hero.mp4"
          thumbnailSrc="thumbnail.png"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center min-h-screen pt-5 bg-black relative">
        <Particles className="absolute inset-0 z-0" />
        <Confetti />

        <div className="flex flex-col items-center space-y-8 z-10">
          <AnimatedGradientText className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Welcome to CoderDojo
          </AnimatedGradientText>

          <WordRotate
            words={["Learn", "Code", "Create"]}
            className="text-5xl md:text-6xl font-bold text-white mb-8"
          />

          <WordPullup
            words="Join a global movement of free, volunteer-led coding clubs for young people!"
            className="text-xl md:text-2xl text-white mb-8 text-center"
          />

          <MarqueeComponent className="w-full bg-black bg-opacity-10 p-4 rounded-lg">
            <div className="flex space-x-8">
              {["HTML", "CSS", "JavaScript", "Python", "Scratch", "Unity", "Raspberry Pi"].map((item) => (
                <span key={item} className="text-white text-lg font-semibold">{item}</span>
              ))}
            </div>
          </MarqueeComponent>

          {/* Animated List of Features */}
          <AnimatedList className="w-full mt-8" />

          {/* Join Us Section */}
          <div className="p-6 mt-8 bg-gradient-to-r from-[#ffffff] to-[#cccccc] rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold">Join Us Today!</h2>
            <p className="mt-2 text-lg">Become part of a global community and learn to code!</p>
            <Link href="/join">
              <button className="bg-black text-white rounded-lg px-4 py-2 mt-4 transition-transform duration-300 ease-in-out hover:scale-105">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
