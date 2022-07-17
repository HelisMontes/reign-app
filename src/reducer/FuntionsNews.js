export function getNews(state, payload) {
  const { frameword: library, news } = payload;
  localStorage.setItem(
    "frameword",
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

export function myFavesNews(state, payload) {}

export function updatePageByFramework(state, payload) {
  
}

export function updateSelect(state, payload) {
  return {
    ...state,
    selectFrameword: payload,
  };
}

export function activeButton(state, payload) {}
