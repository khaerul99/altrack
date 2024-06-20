import React, { useState } from 'react'


function Galery() {
    const [showAll, setShowAll] = useState(false);

    const images = [
      'assets/image/image1.jpg',
      'assets/image/image2.jpg',
      'assets/image/image3.jpg',
      'assets/image/image4.jpg',
      'assets/image/image5.jpg',
      'assets/image/image6.jpg',
      'assets/image/image7.jpg',
      'assets/image/image8.jpg',
    ];
  
    const initialImages = images.slice(0, 4);
  
    const handleToggleShow = () => {
      setShowAll(!showAll);
    };
  return (
    <div>
          <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {(showAll ? images : initialImages).map((src, index) => (
            <div key={index} className="w-full lg:h-[500px]">
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleToggleShow}
            className="mt-5 px-4 py-2 bg-blue-400 text-white font-bold rounded-md text-[14px] active:scale-95 duration-200"
          >
            {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Lebih Banyak'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Galery