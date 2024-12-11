import React, { useState } from "react";
import SummaryAPI from "../common";
import { useEffect } from "react";

const categorylist = () => {
  const [categoryProduct, setCategoryProduct] = useState([]);
  const [loading, setloading] = useState(false);

  const fetchCategoryProduct = async () => {
    setloading(true);
    const response = await fetch(SummaryAPI.categoryProduct.url);
    const dataResponse = await response.json();
    setloading(false);

    setCategoryProduct(dataResponse.data);
  };

  useEffect(() => {
    fetchCategoryProduct();
  }, []);

  return (
    <div className="container mx-auto p-4">
          <div className="flex items-center gap-2 justify-between overflow-scroll scrollbar-none">
        {categoryProduct.map((product, index) => {
          return (
            <div className="" >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-3 bg-white flex items-center justify-center">
                <img
                  src={product?.productImage[0]}
                  alt={product?.category}
                  className="w-full object-fill"
                />
                  </div>
                  <p className="text-center text-sm md:text-base">{ product?.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default categorylist;
