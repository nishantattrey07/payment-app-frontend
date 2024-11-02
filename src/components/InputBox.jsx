/* eslint-disable react/prop-types */
// InputBox.jsx
import { memo } from "react";

const InputBox = memo(
  ({ label, type = "text", placeholder, value, onChange }) => {

    return (
      <>
        <label className="block mb-2 text-gray-700">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-md"
        />
      </>
    );
  }
);

// Optional: Set display name for debugging
InputBox.displayName = "InputBox";

export default InputBox;
