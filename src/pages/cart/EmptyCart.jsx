import { Link } from "react-router";

import { LiaShoppingBagSolid } from "react-icons/lia";

const EmptyCart = () => {
  return (
    <div className="text-center mt-20 px-4 ">
      {/* Empty Cart Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full bg-[#f0f0f5] flex items-center justify-center">
          <LiaShoppingBagSolid className="w-12 h-12 text-[#757684]" />
        </div>
      </div>

      {/* Heading */}
      <p className="text-2xl font-manrope font-semibold text-[#1a1a2e]">
        Your cart is empty
      </p>

      {/* Subtext */}
      <p className="text-[#757684] font-manrope text-sm mt-2 max-w-sm mx-auto">
        Looks like you haven't added any items to your cart yet. Start exploring
        and find something you love!
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-block mt-6 text-blue-500 text-sm font-medium hover:text-blue-400 transition-colors duration-300"
      >
        ← Start Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
