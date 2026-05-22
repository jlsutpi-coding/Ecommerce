import { useCallback } from "react";

import RightColumn from "./RightColumn";
import LeftColumn from "./LeftColumn";
import DeleteModal from "./DeleteModal";
import { useState } from "react";
import TitleSection from "../../components/TitleSection";

const CartPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [targetId, setTargetId] = useState(null);

  const triggerDeleteModal = useCallback((id) => {
    setTargetId(id);
    setOpenModal(true);
  }, []);

  return (
    <main className="max-w-screen-2xl pt-22 lg:pt-32  px-4 md:px-6 lg:px-8 xl:px-12 bg-[#f8f9fa] dark:bg-[#0B1326] dark-transition pb-10 lg:pb-20 mx-auto">
      <DeleteModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        targetId={targetId}
      />

      <TitleSection
        title="Shopping Bag"
        description="Review your selected pieces from the Archive."
      />

      <div className="  grid lg:grid-cols-12 gap-4  lg:gap-12">
        <LeftColumn onOpenModal={triggerDeleteModal} />
        <RightColumn />
      </div>
    </main>
  );
};

export default CartPage;
