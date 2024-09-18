"use client";

import React, { ReactElement, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Notification from "@/components/notification"; // Adjust the path as needed

const notifications = [
  {
    name: "New coding lesson available",
    description: "Explore our latest Python tutorial!",
    icon: "📚",
    color: "#00C9A7", // Teal color
  },
  {
    name: "User joined the community",
    description: "Welcome, Alex! Let's code together.",
    icon: "👥",
    color: "#FFB800", // Yellow color
  },
  {
    name: "Challenge completed",
    description: "Great job on finishing the JavaScript challenge!",
    icon: "🏆",
    color: "#FF3D71", // Red color
  },
  {
    name: "New event coming up",
    description: "Join our upcoming coding bootcamp!",
    icon: "🗓️",
    color: "#1E86FF", // Blue color
  },
];


export const AnimatedList = React.memo(({ className }: { className?: string }) => {
  const [visibleItems, setVisibleItems] = useState(0);
  const childrenArray = notifications; // Using the notifications data

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const element = document.getElementById("animated-list");
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      if (top < windowHeight && bottom > 0) {
        setVisibleItems((prev) => Math.min(prev + 1, childrenArray.length));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="animated-list" className={`flex flex-col items-center gap-4 ${className}`}>
      <AnimatePresence>
        {childrenArray.slice(0, visibleItems).map((item, index) => (
          <AnimatedListItem key={index}>
            <Notification {...item} />
          </AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
});

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  );
}

AnimatedList.displayName = "AnimatedList";
export default AnimatedList;
