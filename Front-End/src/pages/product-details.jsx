import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SummaryAPI from "../common";

const productdetails = () => {
  const [data, setData] = useState({
    productName: "",
    brandName: "",
    category: "",
    productImage: [],
    description: "",
    price: "",
    sellingPrice: "",
  });

  const param = useParams();
  const [loadig, setloading] = useState(false);
  const [activeImage, setActiveImage] = useState("");
  const productImageListLoading = new Array(4).fill(null);

  console.log("product id", param);

  const fetchProductDetails = async () => {
    setloading(true);
    const response = await fetch(SummaryAPI.productDetails.url, {
      method: SummaryAPI.productDetails.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        productId: param?.id,
      }),
    });
    setloading(false);
    const dataResponse = await response.json();
    setData(dataResponse?.data);
    setActiveImage(dataResponse?.data?.productImage[0]);
  };

  console.log("data", data);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const handleMouseEnterProduct = (imgURL) => {
    setActiveImage(imgURL);
  };

  return (
    <div className="container mx-auto p-4">
      <div className=" min-h-[200px] flex flex-col lg:flex-row gap-11">
        {/* ** PRODUCT IMAGE** */}
        <div className="h-96 flex flex-col lg:flex-row-reverse gap-4">
          <div>
            {loadig ? (
              <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200 animate-pulse"></div>
            ) : (
              <div className="h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200">
                <img
                  src={activeImage}
                  className="h-full w-full object-scale-down mix-blend-multiply"
                />
              </div>
            )}
          </div>

          <div className="h-full">
            {loadig ? (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {productImageListLoading.map((el) => {
                  return (
                    <div
                      key={el}
                      className="w-20 h-20 bg-slate-200 rounded animate-pulse"
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div className="flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full">
                {data?.productImage?.map((imgURL, index) => {
                  return (
                    <div
                      key={imgURL}
                      className="w-20 h-20 bg-slate-200 rounded p-1"
                    >
                      <img
                        src={imgURL}
                        className="w-full h-full object-scale-down mix-blend-multiply cursor-pointer"
                        onMouseEnter={() => {
                          handleMouseEnterProduct(imgURL);
                        }}
                        onClick={() => {
                          handleMouseEnterProduct(imgURL);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* ** PRODUCT DETAILS** */}
        <div>PRODUCT DETAILS</div>
      </div>
    </div>
  );
};

export default productdetails;
