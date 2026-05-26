import { useSelector } from "react-redux";

import WatchlistHeader from "./WatchlistHeader";
import CardsSection from "../../components/CardsSection";

const WatchlistPage = () => {
  const { watchlistItems } = useSelector((state) => state.watchlists);

  return (
    <div className=" pt-22 lg:pt-32  md:px-6 px-4 lg:px-8 xl:px-12 max-w-screen-2xl mx-auto">
      <WatchlistHeader watchlistItems={watchlistItems} />

      <div className="mt-8 lg:mt-12 mb-7 md:mb-14 lg:mb-20">
        <CardsSection productsToshow={watchlistItems} page={"watchlist"} />
      </div>
    </div>
  );
};

export default WatchlistPage;
