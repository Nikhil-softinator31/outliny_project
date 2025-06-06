import React from 'react'

const BackgroundVideo = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
      <video
        className="absolute min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay to darken video and improve content visibility */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}

export default BackgroundVideo
