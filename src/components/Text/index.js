import TextStyle from './style';
/**
 *
 * @param {React.ReactNode} children
 * @param {string} type //Add style for the button that is active
 * @returns JSX.Element
 */
const Text = ({ children, type }) => (
  <TextStyle type={type}> {children} </TextStyle>
);

export default Text;
