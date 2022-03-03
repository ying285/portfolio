import React from "react";

const Select = (props) => {
  const onChangeHandler = (e) => {
    props.changLang(e.target.value);
  };
  return (
    <select
      className="position-absolute top-0 end-0 bg-dark text-white"
      onChange={onChangeHandler}
    >
      {["sv", "en"].map((el) => (
        <option value={el}>{el}</option>
      ))}
    </select>
  );
};

export default Select;
