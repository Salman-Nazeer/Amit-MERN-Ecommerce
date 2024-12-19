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
  };

  console.log("data", data);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return <div>productdetails</div>;
};

export default productdetails;
