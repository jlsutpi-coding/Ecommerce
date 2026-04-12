import { useSelector } from "react-redux";

import WatchlistHeader from "./WatchlistHeader";

const WatchlistPage = () => {
  const { watchlistItems } = useSelector((state) => state.watchlists);
  console.log(watchlistItems);
  return (
    <div className=" pt-32 px-8">
      <WatchlistHeader watchlistItems={watchlistItems} />
    </div>
  );
};

export default WatchlistPage;
