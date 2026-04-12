import { useSelector } from "react-redux";

import WatchlistHeader from "./WatchlistHeader";
import CardsSection from "../../components/CardsSection";

const WatchlistPage = () => {
  const { watchlistItems } = useSelector((state) => state.watchlists);
  console.log(watchlistItems);
  return (
    <div className=" pt-32 max-w-360 px-8  mx-auto">
      <WatchlistHeader watchlistItems={watchlistItems} />
      <div className="mt-12 mb-20">
        <CardsSection productsToshow={watchlistItems} page={"watchlist"} />
      </div>
    </div>
  );
};

export default WatchlistPage;
