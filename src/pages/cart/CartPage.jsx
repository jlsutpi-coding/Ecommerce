import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

const CartPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const triggerDeleteModal = (id) => {
    setTargetId(id);
    setOpenModal(true);
  };
  return (
    <main className="pt-32 px-12 bg-[#f8f9fa]  dark:bg-[#0B1326] transition-colors duration-300  pb-20 max-w-screen-2xl mx-auto">
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        targetId={targetId}
      />
      <header className="mb-12">
        <h1 className="text-4xl font-manrope transition-colors duration-300 dark:text-[#DAE2FD] font-extrabold tracking-tight mb-2">
          Shopping Bag
        </h1>
        <p className="font-inter font-[16px] leading-4 text-[#454652] transition-colors duration-300 dark:text-[#C7C4D8]">
          Review your selected pieces from the Archive.
        </p>
      </header>

      <div className="  grid grid-cols-12 gap-12 items-start">
        <LeftColumn onOpenModal={triggerDeleteModal} />
        <RightColumn />
      </div>
    </main>
  );
};

export default CartPage;
