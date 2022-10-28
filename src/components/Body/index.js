import { useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NewContext } from '../../context/NewsProvider';
import useFetch from '../../hook/useFetch';
import useValidateData from '../../hook/useValidateData';

import GroupButton from '../GroupButton';
import ListCart from '../ListCart';
import SelectFramework from '../Select';
/**
 * The body of the app where all the information will be loaded so that the client can interact
 * @returns JSX.Element
 */
const Body = () => {
  const { state, dispatch } = useContext(NewContext);
  const { loadMoreNews, loadMoreFaves } = useValidateData();
  const BUTTON_ACTIVE = state.buttonActive.all;
  const OBJECT_FRAMEWORK = BUTTON_ACTIVE
    ? state.framework[state.selectFramework]
    : state.faves;
  const loading = useFetch(
    { query: `${state.selectFramework}`, page: 0 },
    state
  );
  return loading ? (
    <></>
  ) : (
    <InfiniteScroll
      dataLength={OBJECT_FRAMEWORK.numItem}
      next={() => (BUTTON_ACTIVE ? loadMoreNews() : loadMoreFaves())}
      hasMore={true}
    >
      <section>
        <GroupButton state={state} dispatch={dispatch} />
        {state.buttonActive.all && (
          <SelectFramework
            dispatch={dispatch}
            library={state.selectFramework}
          />
        )}
        <ListCart
          data={OBJECT_FRAMEWORK}
          numItem={parseInt(OBJECT_FRAMEWORK.numItem)}
          state={state}
        />
      </section>
    </InfiniteScroll>
  );
};

export default Body;
