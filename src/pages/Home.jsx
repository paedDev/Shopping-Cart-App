import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import ProductTile from "../components/product/Product";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  //fetching api
  async function fetchListOfProducts() {
    setLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }

  //useEffect
  useEffect(() => {
    fetchListOfProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <CircleLoader
            height={"120"}
            color="rgb(127,29,29)"
            width={"120"}
            visible={"true"}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default Home;
