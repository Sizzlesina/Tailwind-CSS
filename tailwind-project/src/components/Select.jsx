import { IoIosArrowDown } from "react-icons/io";

function Select({ title, options }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 p-4 bg-white"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
