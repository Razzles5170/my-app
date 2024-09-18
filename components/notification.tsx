import React from "react";
import { cn } from "@/lib/utils";

interface NotificationProps {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

const Notification: React.FC<NotificationProps> = ({ name, description, icon, color, time }) => {
  return (
    <figure className={cn("relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 bg-opacity-80 text-white")}>
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl" style={{ backgroundColor: color }}>
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-300">{time}</span>
          </figcaption>
          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export default Notification;
