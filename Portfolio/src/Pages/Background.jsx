import React from "react";

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/Bcgvideos.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
    </div>
  );
};

export default BackgroundVideo;
