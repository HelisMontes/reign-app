import { useContext } from 'react';
import { NewContext } from '../../context/NewProvaider';
import { useFetch } from '../../hook/useFetch';

import GroupButton from '../GroupButton';
import ListCart from '../ListCart';
import SelectFrameword from '../Select';

const Body = () => {
  const { state, dispatch } = useContext(NewContext);
  const OBJECT_FRAMEWORD = state.buttonActive.all
    ? state.frameword[state.selectFrameword]
    : state.faves;
  const loading = useFetch(
    { query: `${state.selectFrameword}`, page: 0 },
    dispatch,
    state
  );
  return loading ? (
    <p>Lobo</p>
  ) : (
    <section>
      <GroupButton state={state} dispatch={dispatch} />
      <SelectFrameword dispatch={dispatch} library={state.selectFrameword} />
      <ListCart
        data={OBJECT_FRAMEWORD}
        numItem={parseInt(OBJECT_FRAMEWORD.numItem)}
        state={state}
      />
    </section>
  );
};

export default Body;
