"use client";
import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerDuration = "2s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonStyle: CSSProperties = {
      "--shimmer-color": shimmerColor,
      "--duration": shimmerDuration,
      "--radius": borderRadius,
      "--bg": background,
    };

    return (
      <button
        style={buttonStyle}
        className={cn(
          "relative flex items-center justify-center overflow-hidden border border-white/10 px-6 py-3 text-white bg-[var(--bg)] rounded-[var(--radius)] dark:text-black",
          "transition-transform duration-300 ease-in-out transform-gpu active:translate-y-[1px]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* Fill effect */}
        <div
          className={cn(
            "absolute inset-0 bg-[var(--shimmer-color)] transition-transform duration-[var(--duration)] transform scale-x-0 origin-left",
            "group-hover:scale-x-100"
          )}
        />

        {/* Highlight effect */}
        <div
          className={cn(
            "absolute inset-0 bg-[var(--shimmer-color)] opacity-0 transition-opacity duration-300",
            "group-hover:opacity-100"
          )}
          style={{
            animation: `shine var(--duration) forwards`,
          }}
        />
        
        {children}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;

