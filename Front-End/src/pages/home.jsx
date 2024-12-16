import React from "react";
import Categorylist from "../components/category-list";
import BannerProduct from "../components/banner-product";

const home = () => {
  return (
    <div>
      <Categorylist />
      <BannerProduct />
    </div>
  );
};

export default home;
