/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * The global state is updated depending on the action performed
 * @returns object
 */
const newReducer = (state, action) => {
  return action.type ? action.type(state, action.payload) : state;
};

export default newReducer;
