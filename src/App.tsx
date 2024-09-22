import { useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  toText: "",
  loading: false,
};
function reducer(state, action) {
  const { type, payload } = action;

  if (type === "INTERCHANGE-LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: payload,
    };
  }
  
  if (type === "SET_TO_TEXT") {
    return {
      ...state,
      loading: false,
      toText: payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      fromText: payload,
      loading: true,
      toText: ""
    };
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Google Translate</h1>
    </>
  );
}

export default App;
