import { Field, Select } from '@headlessui/react';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const DropdownMenu = ({ setGetValue }) => {


    return (
        <div className=" w-full md:w-[20%]">
            <Field>
                <div className="relative font-roboto text-[#404448]">
                    <Select
                        onChange={(e) => setGetValue(e.target.value)}
                        className={clsx(
                            'block w-full appearance-none rounded-lg bg-white/5 py-2 px-4 text-sm/6 border text-[#404448]',
                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                            // Make the text of each option black on Windows
                            '*:text-[#404448]'
                        )}
                    >
                        <option value="">Filter by Category</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Development">Development</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                    </Select>

                </div>
            </Field>
        </div>
    )
}

DropdownMenu.propTypes = {
    setGetValue: PropTypes.func
}

export default DropdownMenu;
