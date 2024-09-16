import React from "react";
import Navbar from "@/components/navbar";
import BlurIn from "@/components/magicui/blur-in";
import WordRotate from "@/components/magicui/word-rotate";
import MarqueeComponent from "@/components/magicui/marquee";
import HyperText from "@/components/magicui/hyper-text";

function Home() {
    return (
        <div className="flex flex-col justify-top items-center min-h-screen bg-white">
            <BlurIn 
            word="Login"
            className="text-5xl font-extrabold text-black mb-4"
            />
        </div>
    );
}

export default Home;
