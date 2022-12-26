import React from "react";

const Label = ({name}) => {
  return (
    <>
      <label
        for={name}
        className="form-label inline-block mb-2 text-gray-700"
      >
        {name}
      </label>
    </>
  );
};

export default Label;
