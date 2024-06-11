import React from 'react'

function Hero() {
  return (
    <div className="relative h-[500px] z-0">
    <video
      className="absolute top-0 left-0 w-full h-[500px] object-cover"
      src="assets/video/mobil.mp4"
      autoPlay
      loop
      muted
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 "></div>
    <div className="relative z-10 flex items-center justify-center h-full text-center text-neutral-content">
      <div className="max-w-lg p-5">
        <h1 className="mb-5 text-5xl font-bold">Welcome To Altrack</h1>
        <p className="mb-5">Nikmati ketenangan pikiran dengan Altraker. Pelacakan GPS real-time yang dapat diandalkan untuk mobil Anda, kapan saja dan di mana saja.</p>
        {/* <button className="px-4 py-2 bg-blue-400 rounded-md">Get Started</button> */}
      </div>
    </div>
  </div>
  )
}

export default Hero