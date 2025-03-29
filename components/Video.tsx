import React from 'react';

const Video: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <video
        className="absolute top-0 left-0 min-w-full min-h-full object-cover"
        src="/web_1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default Video;
