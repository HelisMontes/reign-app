export function getNews(state, payload) {
  const { frameword: library, news } = payload;
  const FRAMEWORD = {
    ...state.frameword,
    [library]: { ...state.frameword[library], news },
  };
  localStorage.setItem('frameword', JSON.stringify(FRAMEWORD));
  return {
    ...state,
    frameword: FRAMEWORD,
  };
}

export function addMoreNew(state, payload) {
  const { library, news, numItem, page } = payload;
  localStorage.setItem(
    'frameword',
    JSON.stringify({
      ...state.frameword,
      [library]: {
        ...state.frameword[library],
        news: [...state.frameword[library].news, ...news],
        page,
      },
    })
  );

  return {
    ...state,
    frameword: {
      ...state.frameword,
      [library]: {
        ...state.frameword[library],
        news: [...state.frameword[library].news, ...news],
        numItem,
        page,
      },
    },
  };
}

function updateFrameworkFaves(state, payload) {
  const { library, item } = payload;
  return state.frameword[library].news.map((element) =>
    element.story_id === item.story_id
      ? { ...element, faves: !element.faves }
      : element
  );
}

export function myFavesNews(state, payload) {
  const { library, item } = payload;
  const NEW_FAVES = {
    ...state.faves,
    news: [...state.faves.news, {...item, faves: true}],
  };
  const UPDATE_NEWS = updateFrameworkFaves(state, payload);
  const FRAMEWORD = {
    ...state.frameword,
    [library]: {
      ...state.frameword[library],
      news: UPDATE_NEWS,
    },
  };
  localStorage.setItem('faves', JSON.stringify(NEW_FAVES));
  localStorage.setItem('frameword', JSON.stringify(FRAMEWORD));
  return {
    ...state,
    faves: NEW_FAVES,
    frameword: FRAMEWORD,
  };
}

export function deleteMyFaves(state, payload) {
  const { library, item } = payload;
  const UPDATE_NEWS = updateFrameworkFaves(state, payload);
  const UPDATE_FAVES = {
    ...state.faves,
    news: state.faves.news.filter((element) => element.story_id !== item.story_id),
  };

  const FRAMEWORD = {
    ...state.frameword,
    [library]: {
      ...state.frameword[library],
      news: UPDATE_NEWS,
    },
  };
  localStorage.setItem('faves', JSON.stringify(UPDATE_FAVES));
  localStorage.setItem('frameword', JSON.stringify(FRAMEWORD));
  return {
    ...state,
    faves: UPDATE_FAVES,
    frameword: FRAMEWORD,
  };
}

export function updatePageByFramework(state, payload) {
  const { library, page } = payload;
  return {
    ...state,
    frameword: {
      ...state.frameword,
      [library]: { ...state.frameword[library], page },
    },
  };
}

export function updateNumItemByFramework(state, payload) {
  const { library, numItem } = payload;
  return {
    ...state,
    frameword: {
      ...state.frameword,
      [library]: { ...state.frameword[library], numItem },
    },
  };
}

export function updateNumItemFaves(state, payload) {
  return {
    ...state,
    faves: {
      ...state.faves,
      numItem: payload,
    },
  };
}

export function updateSelect(state, payload) {
  return {
    ...state,
    selectFrameword: payload,
    frameword: {
      ...state.frameword,
      [payload]: {
        ...state.frameword[payload],
        numItem: 8,
      },
    },
  };
}

export function activeButton(state, payload) {
  return {
    ...state,
    buttonActive: payload,
    faves: {
      ...state.faves,
      numItem: 8,
    }
  };
}
