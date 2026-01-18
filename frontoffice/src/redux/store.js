import { createStore } from "redux";


const initialState = {
  theme: "light" // or "dark"
};

const ThemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };

    default:
      return state;
  }
};


const store = createStore(ThemeReducer);
console.log(store)
export default store;