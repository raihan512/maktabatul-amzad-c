import React from "react";

const InputField = ({ id, children, placeholder }) => {
  return (
    <div className="grid gap-1 mb-5">
      <label htmlFor={id} className="text-xl font-bold text-primary ">
        {children}
      </label>
      <input
        id={id}
        type={id}
        placeholder={placeholder}
        className="border border-primary py-2 px-2.5 text-lg text-primary font-semibold focus-visible:outline-0"
      />
    </div>
  );
};

export default InputField;
