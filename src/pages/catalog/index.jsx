import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import { dataProduct } from "../../data/datas";
import { Link } from "react-router-dom";
// import { Tabs, Tab } from 'daisyui';
import "daisyui/dist/full.css";

function Catalog() {
  const dataProducts = dataProduct;

  return (
    <Layout>
      <div className="py-20">
        <div className="flex justify-center py-10">
          <h1 className="font-bold text-3xl text-white">Product AlTrack</h1>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5">
            {dataProducts &&
              dataProducts.map((e) => (
                <div>
                  <Card
                    key={e.id}
                    img1={e.img1}
                    img2={e.img2}
                    img3={e.img3}
                    label={e.label}
                    price={e.price}
                    desc={e.desc}
                    msg={e.msg}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Card = ({ img1, img2, img3, label, price, desc, msg }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-xl">
      <div className="w-full carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src={img1}
            className="w-full h-[300px] object-cover"
            alt="Product Image 1"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img2}
            className="w-full h-[300px] object-cover"
            alt="Product Image 2"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img3}
            className="w-full h-[300px] object-cover"
            alt="Product Image 3"
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{label}</h2>
        <h3 className="font-semibold">Rp. {price}</h3>
        <button onClick={openModal} className="px-4 py-2 bg-green-400 rounded-md font-semibold text-[12px] text-white">
          Lihat Deskripsi
        </button>
        <div className="card-actions justify-end">
          <Link to={`https://wa.me/628817724742/?text=${msg}`}>
            <button className="px-4 py-2 bg-blue-400 rounded-md font-semibold text-[12px] text-white">
              Beli sekarang
            </button>
          </Link>
        </div>
      </div>

      {modalIsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">{label}</h2>
            <p>{desc}</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-400 rounded-md font-semibold text-white">
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
