import { Link } from "react-router";

import BtnPrimary from "../../components/BtnPrimary";

const RightSection = ({ fullname, email, shippingAddress }) => {
  return (
    <div className="col-span-full  lg:col-span-4 space-y-8 ">
      <div className="bg-[#F3F4F5] dark-transition dark:bg-[#131B2E] rounded-xl p-6 lg:p-8">
        <div className="lg:col-span-4 space-y-8">
          <h3 className="font-inter text-[#454652] dark-transition dark:text-[#C7C4D8] tracking-widest text-[0.7rem] uppercase mb-6">
            Archive Destination
          </h3>
          <div className="space-y-1">
            <p className="font-bold dark:text-[#DAE2FD] text-[#191C1D] dark-transition  text-lg">
              {fullname}
            </p>
            <p className="text-[#454652] dark-transition dark:text-[#C7C4D8]">
              {shippingAddress}
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-[#464555]/10">
            <h3 className="font-inter text-[#454652] dark-transition dark:text-[#C7C4D8] tracking-widest text-[0.7rem] uppercase mb-4">
              Contact Protocol
            </h3>
            <p className="dark:text-[#DAE2FD] text-[#191C1D] dark-transition ">
              {email}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#F3F4F5] dark-transition dark:bg-[#131B2E] rounded-xl p-6 lg:p-8">
        <p className="text-[#454652] dark-transition dark:text-[#C7C4D8] mb-6 text-sm">
          Continue exploring the collection for new additions.
        </p>
        <Link to={"/"}>
          <BtnPrimary>Continue Shopping</BtnPrimary>
        </Link>
      </div>
    </div>
  );
};

export default RightSection;
