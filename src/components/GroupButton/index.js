import TYPE from '../../reducer/type';
import Button from '../Button';

import { GroupButtonStyle } from './style';

const GroupButton = ({ state, dispatch }) => {
  function showNewsFave(type) {
    dispatch({
      type: TYPE.ACTIVE_BUTTON,
      payload: {
        all:
          type === 'all' ? !state.buttonActive.all : state.buttonActive.faves,
        faves:
          type === 'faves' ? !state.buttonActive.faves : state.buttonActive.all,
      },
    });
  }
  return (
    <GroupButtonStyle>
      <Button
        styleButton='primary'
        active={state.buttonActive.all}
        onClick={() => showNewsFave('all')}
      >
        <span className='All'>All</span>
      </Button>
      <Button
        styleButton='primary'
        active={state.buttonActive.faves}
        onClick={() => showNewsFave('faves')}
      >
        <span className='All'>My faves</span>
      </Button>
    </GroupButtonStyle>
  );
};

export default GroupButton;
