import { useDispatch } from "react-redux";

import { deleteAllFromWatchlist } from "../../redux/features/watchlistSlice";
import { addToCart } from "../../redux/features/cartSlice";

import BtnPrimary from "../../components/BtnPrimary";
import TitleSection from "../../components/TitleSection";
import { Link } from "react-router";

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
  if (watchlistItems?.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-3xl">Your watchlist is empty</p>
        <Link to="/products" className="text-primary hover:underline">
          Start exploring products
        </Link>
      </div>
    );
  }
  return (
    <>
      <div className=" flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <TitleSection
          title="Your Watchlist"
          description={`${watchlistItems?.length} objects currently under observation in
              your archive.`}
        />
        {watchlistItems?.length ? (
          <div className="flex gap-2 lg:gap-4 flex-nowrap">
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
              <span>Delete All from Watchlists</span>
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
