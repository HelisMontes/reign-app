export function getNews(state, payload) {
  console.log('getNews')
  const { frameword: library, news } = payload;
  localStorage.setItem(
    'frameword',
    JSON.stringify({
      ...state.frameword,
      [library]: { ...state.frameword[library], news },
    })
  );
  return {
    ...state,
    frameword: {
      ...state.frameword,
      [library]: { ...state.frameword[library], news },
    },
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
      }
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
      }
    },
  };
}
export function myFavesNews(state, payload) {}

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

export function updateSelect(state, payload) {
  return {
    ...state,
    selectFrameword: payload,
    frameword: {
      ...state.frameword,
      [payload]: {
        ...state.frameword[payload],
        numItem: 8,
      }
    },
  };
}

export function activeButton(state, payload) {}
