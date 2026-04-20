import TopSection from "./TopSection";
import TypoContent from "./TypoContent";

const NotFoundPage = () => {
  return (
    <div className=" flex justify-center items-center my-24 mx-6">
      <div className=" max-w-4xl  flex flex-col items-center gap-12  grow  mt-40">
        <TopSection />
        <TypoContent />
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
