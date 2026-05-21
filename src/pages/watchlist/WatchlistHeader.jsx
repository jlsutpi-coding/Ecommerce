import { useDispatch } from "react-redux";

import { deleteAllFromWatchlist } from "../../redux/features/watchListSlice";
import { addToCart } from "../../redux/features/cartSlice";

import BtnPrimary from "../../components/BtnPrimary";
import TitleSection from "../../components/TitleSection";

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
      <div className=" flex justify-between items-center mb-12">
        <TitleSection
          title="Your Watchlist"
          description={`${watchlistItems?.length} objects currently under observation in
              your archive.`}
        />
        {watchlistItems?.length ? (
          <div className="flex gap-4 flex-nowrap ">
            <BtnPrimary
              onBtnClick={() => onMoveToAllCart(watchlistItems)}
              additional={"grow whitespace-nowrap"}
            >
              Move All to Cart
            </BtnPrimary>
            <BtnPrimary
              onBtnClick={() => onDeleteAllFromWatchlist()}
              bg_color="bg-[#ba1a1a]"
              additional={"whitespace-nowrap"}
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
