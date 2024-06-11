import React from "react";
import Layout from "../../layouts/Layout";
import { dataProduct } from "../../data/datas";
import { Link } from "react-router-dom";

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
                    img={e.img}
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

const Card = ({ img, label, price, desc, msg }) => {
  return (
    <div className="card w-full md:w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{label}!</h2>
        <h3 className="font-semibold">Rp. {price}</h3>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          <Link to={`https://wa.me/628817724742/?text=${msg}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
