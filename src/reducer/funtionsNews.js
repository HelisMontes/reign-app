export function getNews(state, payload) {
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
export function myFavesNews(state, payload) {
  const { library, item } = payload;
  return {
    ...state,
    faves: [...state.faves, item],
    frameword: {
      ...state.frameword,
      [library]: {
        ...state.frameword[library],
        news: state.frameword[library].news.map((element) =>
          element.story_id === item.story_id
            ? { ...element, faves: !element.faves }
            : element
        ),
      },
    },
  };
}

export function deleteMyFaves(state, payload) {
  const { library, item } = payload;
  return {
    ...state,
    faves: state.faves.filter(element=> element.story_id !== item.story_id),
    frameword: {
      ...state.frameword,
      [library]: {
        ...state.frameword[library],
        news: state.frameword[library].news.map((element) =>
          element.story_id === item.story_id
            ? { ...element, faves: !element.faves }
            : element
        ),
      },
    },
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
  };
}
