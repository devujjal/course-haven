import DropdownMenu from "../../../components/DropDownMenu/DropdownMenu";
import SearchField from "../../../components/SearchField/SearchField";
import PropTypes from "prop-types";


const FilterStuff = ({ setGetValue }) => {
    return (
        <div className="flex items-center md:flex-row flex-col gap-5 justify-center bg-[#F5F7F9] px-5 py-6 rounded-lg border">
            <DropdownMenu setGetValue={setGetValue} />
            <SearchField />
        </div>
    );
};

FilterStuff.propTypes = {
    setGetValue: PropTypes.func
}

export default FilterStuff;