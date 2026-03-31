import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import {
  clearSelectedProduct,
  fetchProductById,
} from "../../features/productSlice";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ProductPage = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { selectedProduct, detailStatus, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductById(productId));

    return () => dispatch(clearSelectedProduct());
  }, [productId, dispatch]);

  if (detailStatus === "pending") return <>pending</>;
  if (detailStatus === "failed") return <>error</>;

  if (!selectedProduct) return null;

  return (
    <div className="pt-32 pb-20 max-w-screen-2xl mx-auto px-8">
      <div className=" mt-24 mb-12 mx-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left section */}
        <LeftSection
          images={selectedProduct.images}
          thumbnail={selectedProduct.thumbnail}
        />
        {/* Right Product Information */}
        <RightSection product={selectedProduct} />
      </div>
    </div>
  );
};

export default ProductPage;
