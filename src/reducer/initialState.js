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
    selectFrameword: "string",
    buttonActive: {
      all: boolean, 
      faves: boolean 
    },
    frameword {
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
const frameword = {
  angular: { page: 0, news: [], numItem: 8 },
  react: { page: 0, news: [], numItem: 8 },
  vue: { page: 0, news: [], numItem: 8 },
};
const faves = { news: [], numItem: 8 };

const initialState = {
  selectFrameword: 'angular',
  buttonActive: {
    all: true,
    faves: false,
  },
  frameword: JSON.parse(localStorage.getItem('frameword')) || frameword,
  faves: JSON.parse(localStorage.getItem('faves')) || faves,
};

export default initialState;
