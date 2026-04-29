import { useDispatch } from "react-redux";
import BtnPrimary from "../../components/BtnPrimary";
import { IoEye } from "react-icons/io5";
import { deleteAllFromWatchlist } from "../../redux/features/watchListSlice";
import { addToCart } from "../../redux/features/cartSlice";

const WatchlistHeader = ({ watchlistItems }) => {
  const dispatch = useDispatch();
  const onDeleteAllFromWatchlist = () => {
    dispatch(deleteAllFromWatchlist());
  };

  const onMoveToAllCart = (watchlistItems) => {
    watchlistItems.forEach((item) => {
      dispatch(addToCart(item));
    });
  };
  return (
    <>
      {" "}
      <div className=" flex justify-between items-end mb-12">
        <div className=" flex flex-col gap-2">
          <div className=" flex gap-3 items-center justify-start">
            <IoEye className=" text-primary" />
            <span className=" font-inter font-semibold text-[14px]  text-[#565C84] leading-5 tracking-[1.4px]">
              YOUR CURATED COLLECTION
            </span>
          </div>
          <div>
            <h2 className=" dark:text-[#DAE2FD] dark-transition text-[#191C1D] text-[48px] font-extrabold leading-12 tracking-[-2.4px] font-manrope">
              Your Watchlist
            </h2>
          </div>
          <div>
            <span className=" dark-transition dark:text-[#C7C4D8]  font-inter text-[16px] leading-6 font-normal text-[#454652]">
              {" "}
              {watchlistItems?.length} objects currently under observation in
              your archive.
            </span>
          </div>
        </div>
        {watchlistItems.length ? (
          <div className="flex gap-4 flex-nowrap ">
            <BtnPrimary
              onBtnClick={() => onMoveToAllCart(watchlistItems)}
              aditionnal={"grow whitespace-nowrap"}
            >
              Move All to Cart
            </BtnPrimary>
            <BtnPrimary
              onBtnClick={() => onDeleteAllFromWatchlist()}
              bg_color="bg-[#ba1a1a]"
              aditionnal={"whitespace-nowrap"}
            >
              <span>Delete All From watchlists</span>
            </BtnPrimary>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default WatchlistHeader;
