"use client";

import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1.2 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 3,
    duration: 3,
    type: "scroll",
    stiffness: 10,
    damping: 15,
    mass: 2,
    scale: {
      type: "scroll",
      stiffness: 100,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  text: string;
  className?: string;
}

const ShinyButton = ({
  text = "shiny-button",
  className,
}: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "relative rounded-lg px-6 py-2 font-medium bg-black text-white border-2 border-transparent transition-all duration-300 ease-in-out hover:border-[linear-gradient(45deg, silver, white)] hover:shadow-lg",
        className,
      )}
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-white"
        style={{
          maskImage:
            "linear-gradient(-75deg, hsl(0, 0%, 100%) calc(var(--x) + 20%), transparent calc(var(--x) + 30%), hsl(0, 0%, 100%) calc(var(--x) + 100%))",
        }}
      >
        {text}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) content-box, linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(0, 0%, 50%)_calc(var(--x)+20%),hsl(0, 0%, 70%)_calc(var(--x)+25%),hsl(0, 0%, 50%)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
};

export default ShinyButton;
