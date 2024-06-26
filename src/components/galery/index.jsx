import React, { useState } from 'react'


function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState('all');

  const images = [
    { src: 'assets/image/image1.jpg', category: 'general' },
    { src: 'assets/image/image2.jpg', category: 'general' },
    { src: 'assets/image/image3.jpg', category: 'general' },
    { src: 'assets/image/image4.jpg', category: 'general' },
    { src: 'assets/image/image5.jpg', category: 'general' },
    { src: 'assets/image/image6.jpg', category: 'general' },
    { src: 'assets/image/image7.jpg', category: 'general' },
    { src: 'assets/image/image8.jpg', category: 'general' },
    { src: 'assets/image/instalasi/instalasi1.jpeg', category: 'instalasi' },
    { src: 'assets/image/instalasi/instalasi2.jpeg', category: 'instalasi' },
    { src: 'assets/image/instalasi/instalasi3.jpeg', category: 'instalasi' },
    { src: 'assets/image/instalasi/instalasi4.jpeg', category: 'instalasi' },
    { src: 'assets/image/instalasi/instalasi5.jpeg', category: 'instalasi' },
    { src: 'assets/image/instalasi/instalasi6.jpeg', category: 'instalasi' },
    { src: 'assets/image/instalasi/instalasi7.jpeg', category: 'instalasi' },
  ];

  // const initialImages = images.slice(0, 4);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setShowAll(false); // reset showAll when category changes
  };

  const filteredImages = category === 'all'
    ? images
    : images.filter(image => image.category === category);

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 4);

  return (
    <div>
      <div className="flex justify-center space-x-4 p-5">
        <button
          onClick={() => handleCategoryChange('all')}
          className={`px-4 py-2 ${category === 'all' ? 'bg-blue-500' : 'bg-gray-300'} text-white font-bold rounded-md text-[14px] active:scale-95 duration-200`}
        >
          Semua
        </button>
        <button
          onClick={() => handleCategoryChange('general')}
          className={`px-4 py-2 ${category === 'general' ? 'bg-blue-500' : 'bg-gray-300'} text-white font-bold rounded-md text-[14px] active:scale-95 duration-200`}
        >
          General
        </button>
        <button
          onClick={() => handleCategoryChange('instalasi')}
          className={`px-4 py-2 ${category === 'instalasi' ? 'bg-blue-500' : 'bg-gray-300'} text-white font-bold rounded-md text-[14px] active:scale-95 duration-200`}
        >
          Instalasi
        </button>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {displayedImages.map((image, index) => (
            <div key={index} className="w-full lg:h-[500px]">
              <img src={image.src} alt="" className="h-full w-full object-cover" />
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
  );
}

export default Gallery;