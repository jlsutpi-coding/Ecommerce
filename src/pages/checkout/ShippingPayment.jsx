import { useState } from "react";

import toast from "react-hot-toast";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";

import { MdCreditCard, MdLockOutline } from "react-icons/md";

import { clearCart } from "../../redux/features/cartSlice";

const ShippingPayment = ({
  cartItems,
  totalAmount,
  totalDiscount,
  totalDiscountedPrice,
}) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    shippingAddress: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (isSubmitting) return;

    if (!formData.fullname || !formData.email || !formData.shippingAddress) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    const orderId = `${Date.now()}`;

    const orderData = {
      fullname: formData.fullname,
      email: formData.email,
      shippingAddress: formData.shippingAddress,
      cardNumber: formData.cardNumber,
      expiry: formData.expiry,
      cvc: formData.cvc,
      cartItems,
      totalAmount,
      totalDiscount,
      totalDiscountedPrice,
      orderId,
    };

    localStorage.setItem("orderDetail", JSON.stringify(orderData));
    toast.success("Order placed successfully!", {
      icon: "🎉",
      autoClose: 3000,
    });

    navigate("/order-success", {
      state: {
        orderData,
      },
    });

    dispatch(clearCart());
    setFormData({
      fullname: "",
      email: "",
      shippingAddress: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    });

    setIsSubmitting(false);
  };

  const inputClasses = `py-4 text-base duration-300 border-none focus:ring-1 dark:focus:ring-[#C0C1FF]
  dark:text-[#6B7280] dark:bg-[#171F33] focus:outline-none bg-[#E1E3E4]
    transition-all outline-none placeholder:text-[#757684]/60  dark:placeholder:text-[#918fa1]
      rounded-lg focus:ring-primary focus:bg-white dark:focus:bg-[#131B2E]/40 font-inter font-normal`;

  const labelClasses = `font-inter text-xs dark:text-[#c7c4d8] dark-transition uppercase tracking-widest  pl-1`;
  return (
    <section>
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-manrope dark-transition dark:text-[#DAE2FD] text-[#191C1D] text-2xl font-bold tracking-tight">
          Shipping &amp; Payment
        </h2>
      </div>
      <form
        className="space-y-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="fullname" className={`${labelClasses}`}>
              Full Name
            </label>
            <input
              required
              type="text"
              id="fullname"
              onChange={handleInputChange}
              value={formData.fullname}
              placeholder="ALEXANDER VANE"
              className={` ${inputClasses} w-full px-6`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className={`${labelClasses}`}>
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              onChange={handleInputChange}
              value={formData.email}
              placeholder="example@gmail.com"
              className={` ${inputClasses} w-full  px-6`}
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label htmlFor="shippingAddress" className={`${labelClasses}`}>
              Shipping Address
            </label>
            <input
              required
              type="text"
              id="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              placeholder="1024 NOCTURNE AVE, LONDON, UK"
              className={`${inputClasses} w-full  px-6`}
            />
          </div>
        </div>
        <div className="  p-4 lg:p-6 bg-[#f3f4f5] dark:bg-[#131B2E] rounded-xl border dark:border-white/10 border-indigo-50/50">
          <div className="flex flex-col gap-4">
            <label htmlFor="cardNumber" className={`${labelClasses}`}>
              Secure Credit Card Transaction
            </label>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative grow">
                <input
                  required
                  maxLength="19"
                  id="cardNumber"
                  className={`${inputClasses} w-full pl-12 pr-4`}
                  placeholder="Card Number"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9\s]*"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />

                <MdCreditCard className="absolute dark:text-[#c7c4d8]  left-4 top-1/2 -translate-y-1/2 text-[#c7c4d8]" />
              </div>
              <div className="flex gap-4">
                <input
                  required
                  className={`${inputClasses} w-24  text-center text-base`}
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  maxLength="5"
                  onChange={handleInputChange}
                />
                <input
                  required
                  className={`${inputClasses} w-24  text-center text-base`}
                  placeholder="CVC"
                  id="cvc"
                  type="text"
                  maxLength="4"
                  value={formData.cvc}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <p className="text-xs dark:text-[#c7c4d8]  uppercase tracking-tighter opacity-60 flex items-center gap-1">
              <MdLockOutline />
              Encrypted and processed via Nocturnal Secure-Vault.
            </p>
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full py-6 rounded-full bg-primary text-white font-manrope font-extrabold text-lg uppercase tracking-widest shadow-xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 relative overflow-hidden group"
          >
            Place Order
          </button>
          <p className="text-center mt-6 text-label-md dark:text-[#c7c4d8]   opacity-50 uppercase tracking-widest">
            By placing this order, you agree to our Archive Terms.
          </p>
        </div>
      </form>
    </section>
  );
};

export default ShippingPayment;
