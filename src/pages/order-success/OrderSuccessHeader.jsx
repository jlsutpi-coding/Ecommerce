import { GoCheckCircle } from "react-icons/go";

const OrderSuccessHeader = () => {
  return (
    <div className="mb-6 md:mb-9 lg:mb-12">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-16 h-16 bg-[#c0c1ff]/40 rounded-full blur-xl pointer-events-none" />

          <div className="relative p-5 border rounded-full border-[#c0c1ff]/40 dark:bg-[#111422] flex justify-center items-center z-10">
            <GoCheckCircle
              aria-hidden="true"
              className="w-10 h-10 text-primary dark:text-[#c0c1ff]"
            />
          </div>
        </div>
        <span className="font-inter dark:text-[#FFB695] dark-transition text-[#8e4d2a] text-tertiary tracking-[0.2em] text-[0.75rem] uppercase mb-4">
          Transmission Complete
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-manrope dark:text-[#DAE2FD] text-[#191C1D] dark-transition text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
          Your acquisition has been archived.
        </h1>
        <p className=" text-center text-[#454652] dark-transition dark:text-[#c7c4d8] opacity-80 font-inter max-w-xl text-xs md:text-base lg:text-lg">
          An entry has been created in our ledger. Your items are being prepared
          for dispatch under the cover of dusk.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccessHeader;
