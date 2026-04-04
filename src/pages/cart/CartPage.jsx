import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";

const CartPage = () => {
  return (
    <main className="pt-32 px-12 bg-[#f8f9fa] pb-20 max-w-screen-2xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-manrope font-extrabold tracking-tight mb-2">
          Shopping Bag
        </h1>
        <p className="font-inter font-[16px] leading-4 text-[#454652]">
          Review your selected pieces from the Archive.
        </p>
      </header>

      <div className="  grid grid-cols-12 gap-12">
        <LeftColumn />
        <RightColumn />
      </div>
    </main>
  );
};

export default CartPage;
