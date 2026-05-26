import ImageUrl from "../../components/ImageUrl";

const LeftSection = ({ thumbnail, images }) => {
  return (
    <>
      {/* Left : Image Gallery (Bento style) */}
      <div className=" col-span-1 md:col-span-3 lg:col-span-6 grid grid-cols-6 gap-4">
        <div className="col-span-6  rounded-xl overflow-hidden bg-surface-container-low">
          <ImageUrl
            imgClasses=""
            src={thumbnail}
            containerClasses={"w-full h-full mx-auto object-contain"}
          />
        </div>
        {images?.map((item, index) => (
          <div
            key={index}
            className="col-span-2 aspect-square rounded-xl overflow-hidden bg-surface-container-low"
          >
            <ImageUrl
              imgClasses=""
              src={item}
              alt="Product image"
              containerClasses="w-full rounded-lg relative h-full overflow-hidden"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default LeftSection;
