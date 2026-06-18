import React from "react";
import { useState } from "react";
import { MdCreditCard, MdLockOutline } from "react-icons/md";

const ShippingPayment = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    shippingAddress: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = () => {
    console.log("form data", formData);
    setFormData({
      fullname: "",
      email: "",
      shippingAddress: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    });
  };
  const inputClasses =
    "py-4 text-base duration-300 border-none focus:ring-1 dark:focus:ring-[#C0C1FF] transition-all outline-none placeholder:text-[#757684]/60 dark:text-[#dae2fd]  dark:placeholder:text-[#918fa1] rounded-lg focus:ring-primary bg-[#e1e3e4] dark:bg-[#131B2E] focus:bg-white dark:focus:bg-[#131B2E]/40 font-inter font-normal";
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-manrope dark:text-[#DAE2FD] text-[#191C1D] text-2xl font-bold tracking-tight">
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
            <label
              htmlFor="fullname"
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant pl-1"
            >
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
            <label
              htmlFor="email"
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant pl-1"
            >
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
            <label
              htmlFor="shippingAddress"
              className="font-label text-xs uppercase tracking-widest text-on-surface-variant pl-1"
            >
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
            <label
              htmlFor="cardNumber"
              className="font-label text-xs uppercase tracking-widest text-on-secondary-fixed-variant"
            >
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
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                />

                <MdCreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d8]" />
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
            <p className="text-xs text-on-surface-variant uppercase tracking-tighter opacity-60 flex items-center gap-1">
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
            <span>Place Order</span>
          </button>
          <p className="text-center mt-6 text-label-md  opacity-50 uppercase tracking-widest">
            By placing this order, you agree to our Archive Terms.
          </p>
        </div>
      </form>
    </section>
  );
};

export default ShippingPayment;
