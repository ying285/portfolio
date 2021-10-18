import React from "react";
//import { IntlProvider } from "react-intl";

// const message = {
//   sv: {
//     title: "välkomma till oss!",
//   },
//   en: {
//     title: "welcome to us!",
//   },
// };

const Select = (props) => {
  // const [locale, setLocale] = useState("sv");
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
