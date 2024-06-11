import React from "react";
import Layout from "../../layouts/Layout";

function AboutUs() {
  return (
    <Layout>
      <div className="px-[20px] md:px-[80px] py-[40px] mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className="lg:h-[500px] lg:w-[500px] overflow-hidden">
              <img
                src="/assets/image/ALTRACK3.jpg"
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="flex justify-center text-white">
            <div className="py-[50px] flex flex-col gap-4">
              <div className="flex items-center gap-3 px-[20px]">
                <div className="h-[2px] w-[18px] bg-black"></div>
                <h3>About Us</h3>
              </div>

              <h1 className="font-bold text-[46px] text-blue-400">Our Story</h1>
              <p className="text-[32px]">
                Kenali kami, toko, lingkungan, dan orang-orang di baliknya!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[20px] md:px-[80px] py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:px-20 text-white">
            <div className="flex items-center gap-3 px-[20px]">
              <div className="h-[2px] w-[18px] bg-black"></div>
              <h3>Our Story</h3>
            </div>
            <h1 className="font-bold text-[50px] text-blue-400">AlTrack</h1>
            <p className="mb-5 font-medium text-gray-500 text-lg">
              Altraker hadir untuk memastikan keamanan kendaraan Anda. Dengan
              teknologi pelacakan GPS canggih, kami memberikan perlindungan
              optimal untuk mobil Anda
            </p>
          </div>
          <div>
            <div className="lg:px-20 flex flex-col gap-4 text-white">
              <p className="text-justify">
                Di Altraker, kami percaya bahwa teknologi memiliki kekuatan
                untuk memberikan ketenangan pikiran dan keamanan. Didirikan
                dengan misi untuk merevolusi keamanan kendaraan, kami
                mengkhususkan diri dalam solusi pelacakan GPS canggih yang
                menjaga Anda tetap terhubung dengan kendaraan Anda di mana pun
                Anda berada.
              </p>
              <p className="text-justify">
                {" "}
                Misi kami adalah menyediakan sistem pelacakan GPS yang inovatif
                dan andal untuk memastikan keamanan dan keselamatan kendaraan
                Anda. Kami berkomitmen untuk memberikan layanan, akurasi, dan
                kenyamanan terbaik bagi pelanggan kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
