import React from "react";

interface VideoBackgroundProps {
  videoId: string;
  children?: React.ReactNode;
}

export default function VideoBackground({ videoId, children }: VideoBackgroundProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* YouTube iframe in background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <iframe
          className="w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${videoId}&modestbranding=1&showinfo=0&iv_load_policy=3`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
