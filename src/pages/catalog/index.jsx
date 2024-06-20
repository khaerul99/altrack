import React from "react";
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
  return (
    // <div className="card w-full md:w-80 bg-base-100 shadow-xl">
    //   <figure>
    //     <img1 src={img1} alt="Shoes" className="w-full h-[300px] object-cover" />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">{label}</h2>
    //     <h3 className="font-semibold">Rp. {price}</h3>
    //     <p>{desc}</p>
    //     <div className="card-actions justify-end">
    //       <Link to={`https://wa.me/628817724742/?text=${msg}`}>
    //         <button className="px-4 py-2 bg-blue-400 rounded-md font-semibold text-[12px]">Beli sekarang</button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="card w-full md:w-80 bg-base-100 shadow-xl">
      <div className="w-full carousel rounded-box">
        <div className="carousel-item w-full">
          <img
            src={img1}
            className="w-full h-[300px] object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img2}
            className="w-full h-[300px] object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src={img3}
            className="w-full h-[300px] object-cover"
            alt="Tailwind CSS Carousel component"
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{label}</h2>
        <h3 className="font-semibold">Rp. {price}</h3>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <Link to={`https://wa.me/628817724742/?text=${msg}`}>
            <button className="px-4 py-2 bg-blue-400 rounded-md font-semibold text-[12px] text-white">
              Beli sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
