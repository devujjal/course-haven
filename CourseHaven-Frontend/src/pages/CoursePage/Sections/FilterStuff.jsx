import DropdownMenu from "../../../components/DropDownMenu/DropdownMenu";
import SearchField from "../../../components/SearchField/SearchField";

const FilterStuff = () => {
    return (
        <div className="flex items-center md:flex-row flex-col gap-5 justify-center bg-[#F5F7F9] px-5 py-6 rounded-lg border">
            <DropdownMenu />
            <SearchField />
        </div>
    );
};

export default FilterStuff;