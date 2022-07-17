import TextStyle from "./style";

const Text = ({ children, type }) => (
  <TextStyle type={type}> {children} </TextStyle>
);

export default Text