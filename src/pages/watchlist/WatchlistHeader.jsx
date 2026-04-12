import BtnPrimary from "../../components/BtnPrimary";
import { IoEye } from "react-icons/io5";

const WatchlistHeader = ({ watchlistItems }) => {
  return (
    <>
      {" "}
      <div className=" flex justify-between items-end">
        <div className=" flex flex-col gap-2">
          <div className=" flex gap-3 items-center justify-start">
            <IoEye className=" text-primary" />
            <span className=" font-inter font-semibold text-[14px]  text-[#565C84] leading-5 tracking-[1.4px]">
              YOUR CURATED COLLECTION
            </span>
          </div>
          <div>
            <h2 className=" text-[#191C1D] text-[48px] font-extrabold leading-12 tracking-[-2.4px] font-manrope">
              Your Watchlist
            </h2>
          </div>
          <div>
            <span className="  font-inter text-[16px] leading-6 font-normal text-[#454652]">
              {" "}
              {watchlistItems?.length} objects currently under observation in
              your archive.
            </span>
          </div>
        </div>
        <div className="flex gap-4 flex-nowrap ">
          <BtnPrimary
            onBtnClick={() => {}}
            aditionnal={"grow whitespace-nowrap"}
          >
            Move All to Cart
          </BtnPrimary>
          <BtnPrimary
            onBtnClick={() => {}}
            bg_color="bg-[#ba1a1a]"
            aditionnal={"whitespace-nowrap"}
          >
            <span>Delete All From watchlists</span>
          </BtnPrimary>
        </div>
      </div>
    </>
  );
};

export default WatchlistHeader;
