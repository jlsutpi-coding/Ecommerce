import { useSelector } from "react-redux";

import WatchlistHeader from "./WatchlistHeader";
import CardsSection from "../../components/CardsSection";

const WatchlistPage = () => {
  const { watchlistItems } = useSelector((state) => state.watchlists);
  console.log(watchlistItems);
  return (
    <div className=" pt-32 px-8">
      <WatchlistHeader watchlistItems={watchlistItems} />
      <div className="mt-12">
        <CardsSection productsToshow={watchlistItems} />
      </div>
    </div>
  );
};

export default WatchlistPage;
