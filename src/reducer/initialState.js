/*
  const news = {
    story_id: number
    author: string,
    story_title: string,
    story_url: string,
    created_at: string,
    faves: boolean,
    pages: number,
  };
  initialState = {
    selectFrameword: "angular",
    buttonActive: {
      all: boolean, 
      faves: boolean 
    },
    frameword {
      angular: [{news}] ,
      react: [{news}] ,
      vue: [{news}]     
    }
    faves: [id]
  }
*/
const frameword = {
  angular: [],
  react: [],
  vue: [],
};
const faves = [];

const initialState = {
  selectFrameword: "angular",
  buttonActive: {
    all: true,
    faves: false,
  },
  frameword: JSON.parse(localStorage.getItem("frameword")) || frameword,
  faves: JSON.parse(localStorage.getItem("frameword")) || faves,
};

export default initialState;
