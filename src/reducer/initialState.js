/*
  const news = {
    story_id: string
    author: string,
    story_title: string,
    story_url: string,
    created_at: string,
    faves: boolean,
  };
  initialState = {
    selectframework: "string",
    buttonActive: {
      all: boolean, 
      faves: boolean 
    },
    framework {
      angular: {
        page: number
        news: [{news}]
        numItem: number
      },
      react: {
        page: number
        news: [{news}]
        numItem: number
      },
      vue: {
        page: number
        news: [{news}]
        numItem: number
      }     
    }
    faves: {
      news: [{news}]
      numItem: number
    }    
  }
*/
const framework = {
  angular: { page: 0, news: [], numItem: 8 },
  react: { page: 0, news: [], numItem: 8 },
  vue: { page: 0, news: [], numItem: 8 },
};
const faves = { news: [], numItem: 8 };
/**
 * Initial state of the global state of the app
 * Validate if there is information stored in the localStorage to assign it to the initial state
 */
const initialState = {
  selectFramework: 'angular',
  buttonActive: {
    all: true,
    faves: false,
  },
  framework: JSON.parse(localStorage.getItem('framework')) || framework,
  faves: JSON.parse(localStorage.getItem('faves')) || faves,
};

export default initialState;
