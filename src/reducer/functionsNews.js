/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status,  we make the first request to the endpoint of each framework and store it in localStorage
 */
export function getNews(state, payload) {
  const { framework: library, news } = payload;
  const framework = {
    ...state.framework,
    [library]: { ...state.framework[library], news },
  };
  localStorage.setItem('framework', JSON.stringify(framework));
  return {
    ...state,
    framework: framework,
  };
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status, add new news to each framework and update localStorage
 */
export function addMoreNew(state, payload) {
  const { library, news, numItem, page } = payload;
  localStorage.setItem(
    'framework',
    JSON.stringify({
      ...state.framework,
      [library]: {
        ...state.framework[library],
        news: [...state.framework[library].news, ...news],
        page,
        numItem: 8,
      },
    })
  );

  return {
    ...state,
    framework: {
      ...state.framework,
      [library]: {
        ...state.framework[library],
        news: [...state.framework[library].news, ...news],
        numItem,
        page,
      },
    },
  };
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * update if the news is favorite or not depending on the framework
 */
function updateFrameworkFaves(state, payload) {
  const { library, item } = payload;
  return state.framework[library].news.map((element) =>
    element.story_id === item.story_id
      ? { ...element, faves: !element.faves }
      : element
  );
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status, add a news as a favorite and update localStorage
 */
export function myFavesNews(state, payload) {
  const { library, item } = payload;
  const NEW_FAVES = {
    ...state.faves,
    news: [...state.faves.news, { ...item, faves: true }],
  };
  const UPDATE_NEWS = updateFrameworkFaves(state, payload);
  const framework = {
    ...state.framework,
    [library]: {
      ...state.framework[library],
      news: UPDATE_NEWS,
    },
  };
  localStorage.setItem('faves', JSON.stringify(NEW_FAVES));
  localStorage.setItem('framework', JSON.stringify(framework));
  return {
    ...state,
    faves: NEW_FAVES,
    framework: framework,
  };
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status, delete a news as a favorite and update localStorage
 */
export function deleteMyFaves(state, payload) {
  const { item } = payload;
  const LENGTH_FAVE = state.faves.news.length;
  const UPDATE_NEWS = updateFrameworkFaves(state, {
    library: item.framework,
    item,
  });
  const UPDATE_FAVES = {
    ...state.faves,
    news: state.faves.news.filter(
      (element) => element.story_id !== item.story_id
    ),
  };

  const framework = {
    ...state.framework,
    [item.framework]: {
      ...state.framework[item.framework],
      news: UPDATE_NEWS,
    },
  };
  localStorage.setItem('faves', JSON.stringify(UPDATE_FAVES));
  localStorage.setItem('framework', JSON.stringify(framework));
  return {
    ...state,
    buttonActive:
      LENGTH_FAVE <= 1
        ? { all: true, faves: false }
        : { ...state.buttonActive },
    faves: UPDATE_FAVES,
    framework: framework,
  };
}

export function updateNumItemByFramework(state, payload) {
  const { library, numItem } = payload;
  return {
    ...state,
    framework: {
      ...state.framework,
      [library]: { ...state.framework[library], numItem },
    },
  };
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status and update the maximum amount of item that we can render depending on the
 */
export function updateNumItemFaves(state, payload) {
  return {
    ...state,
    faves: {
      ...state.faves,
      numItem: payload,
    },
  };
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status and update the selected framework
 */
export function updateSelect(state, payload) {
  return {
    ...state,
    selectFramework: payload,
    framework: {
      ...state.framework,
      [payload]: {
        ...state.framework[payload],
        numItem: 8,
      },
    },
  };
}
/**
 *
 * @param {object} state //state of reducer
 * @param {function} dispatch //function to update status
 * We update the status and enable the section that we are going to render (all or favorites)
 */
export function activeButton(state, payload) {
  return {
    ...state,
    buttonActive: payload,
    faves: {
      ...state.faves,
      numItem: 8,
    },
  };
}
