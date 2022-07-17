import SelectStyle from "./style";

const Select = ({onChange}) => {
  return (
    <SelectStyle>
      <select onChange={onChange}>
        <option value="angular" select>
          Angular
        </option>
        <option value="react">React</option>
        <option value="vue">Vue</option>
      </select>
    </SelectStyle>
  );
};

export default Select