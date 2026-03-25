import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  return (
    <Link className="" to={`/product/${product.id}`}>
      <div className=" w-70.5 h-112.25 bg-red-700 ">ProductCard</div>
    </Link>
  );
};

export default ProductCard;
