import ActionButtons from "./ActionButtons";
import SearchArea from "./SearchArea";
import TopSection from "./TopSection";
import TypoContent from "./TypoContent";

const NotFoundPage = () => {
  return (
    <div className=" flex justify-center items-center my-8 mx-6">
      <div className=" max-w-4xl  flex flex-col items-center gap-12  grow  mt-30">
        <TopSection />
        <TypoContent />
        <SearchArea />
        <ActionButtons />
      </div>
    </div>
  );
};

export default NotFoundPage;
