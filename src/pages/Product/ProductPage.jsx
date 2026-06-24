import { useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import {
  clearSelectedProduct,
  fetchProductById,
} from "../../redux/features/productSlice";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Breadcrumb from "../../components/Breadcrumb";
import ProductPageSkeleton from "./ProductPageSkeleton";

const ProductPage = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { selectedProduct, detailStatus } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductById(productId));

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [productId, dispatch]);

  if (detailStatus === "pending")
    return (
      <div className="pt-22 lg:pt-32 md:px-6 px-4 lg:px-8 xl:px-12 pb-10 lg:pb-20 max-w-screen-2xl mx-auto">
        <Breadcrumb />
        <ProductPageSkeleton />
      </div>
    );
  if (detailStatus === "failed") return <>error</>;

  if (!selectedProduct) return null;

  return (
    <div className="pt-22 lg:pt-32 md:px-6 px-4 lg:px-8 xl:px-12 pb-10 lg:pb-20 max-w-screen-2xl mx-auto">
      <Breadcrumb />

      <div className="mt-8 md:mt-16 lg:mt-24  mb-4 md:mb-8 lg:mb-12 lg:mx-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16">
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
