import TYPE from '../../reducer/type';
import Button from '../Button';

import { GroupButtonStyle } from './style';
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * Buttons to select between all frameworks or favorites
 * @returns JSX.Element
 */
const GroupButton = ({ state, dispatch }) => {
  const LENGTH_FAVE = state.faves.news.length;
  function showNewsFave(type) {
    dispatch({
      type: TYPE.ACTIVE_BUTTON,
      payload: {
        all: type === 'all' ? true : false,
        faves: type === 'faves' ? true : false,
      },
    });
  }
  return (
    <GroupButtonStyle>
      <Button
        styleButton={{ type: 'primary' }}
        active={state.buttonActive.all}
        onClick={() => showNewsFave('all')}
      >
        <span className='All'>All</span>
      </Button>
      <Button
        styleButton={{ type: 'primary', cursor: LENGTH_FAVE }}
        active={state.buttonActive.faves}
        onClick={() => showNewsFave('faves')}
      >
        <span className='All'>My faves</span>
      </Button>
    </GroupButtonStyle>
  );
};

export default GroupButton;
