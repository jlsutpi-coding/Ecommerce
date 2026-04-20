import { CiSearch } from "react-icons/ci";

const SearchArea = () => {
  return (
    <div className="mx-auto">
      <div className=" group relative  flex items-center transition-all duration-300">
        <CiSearch className=" absolute left-4 text-[#757684] group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          className="pl-12 w-full border-none focus:ring-1 transition-all outline-none placeholder:text-[#757684]/60 rounded-lg focus:ring-primary bg-[#e1e3e4] focus:bg-white pr-6 py-4.5 font-inter font-normal text-[16px]"
          placeholder="Search the archive"
        />
      </div>
    </div>
  );
};

export default SearchArea;
