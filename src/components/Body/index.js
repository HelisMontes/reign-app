import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NewContext } from '../../context/NewProvaider';
import useFetch from '../../hook/useFetch';
import useValidateData from '../../hook/useValidateData';

import GroupButton from '../GroupButton';
import ListCart from '../ListCart';
import SelectFrameword from '../Select';

const Body = () => {
  const { state, dispatch } = useContext(NewContext);
  const { loadMoreNews, loadMoreFaves } = useValidateData();
  const BUTTON_ACTIVE = state.buttonActive.all;
  const OBJECT_FRAMEWORD = BUTTON_ACTIVE
    ? state.frameword[state.selectFrameword]
    : state.faves;
  const loading = useFetch(
    { query: `${state.selectFrameword}`, page: 0 },
    dispatch,
    state
  );
  return loading ? (
    <></>
  ) : (
    <InfiniteScroll
      dataLength={OBJECT_FRAMEWORD.numItem}
      next={() => (BUTTON_ACTIVE ? loadMoreNews() : loadMoreFaves())}
      hasMore={true}
    >
      <section>
        <GroupButton state={state} dispatch={dispatch} />
        {state.buttonActive.all && (
          <SelectFrameword
            dispatch={dispatch}
            library={state.selectFrameword}
          />
        )}
        <ListCart
          data={OBJECT_FRAMEWORD}
          numItem={parseInt(OBJECT_FRAMEWORD.numItem)}
          state={state}
        />
      </section>
    </InfiniteScroll>
  );
};

export default Body;
