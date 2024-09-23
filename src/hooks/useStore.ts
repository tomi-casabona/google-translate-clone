import { useReducer } from "react";
import { Action, FromLanguage, Language, State } from "../types";
import { AUTO_LANGUAGE } from "../constants";

const initialState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  toText: "",
  loading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    if (state.fromLanguage === AUTO_LANGUAGE) return state;

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  if (type === "SET_TO_TEXT") {
    return {
      ...state,
      loading: false,
      toText: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      fromText: action.payload,
      loading: true,
      toText: "",
    };
  }

  return state;
}

export function useStore() {
  const [{ fromLanguage, toLanguage, loading, toText, fromText }, dispatch] =
    useReducer(reducer, initialState);

  const interchangeLanguages = () => {
    dispatch({ type: "INTERCHANGE_LANGUAGES" });
  };

  const setToLanguage = (payload: Language) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload });
  };

  const setFromLanguage = (payload: FromLanguage) => {
    dispatch({ type: "SET_FROM_LANGUAGE", payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };

  const setToText = (payload: string) => {
    dispatch({ type: "SET_TO_TEXT", payload });
  };
  return {
    fromLanguage,
    toLanguage,
    loading,
    toText,
    fromText,
    setFromLanguage,
    setFromText,
    setToLanguage,
    setToText,
    interchangeLanguages,
  };
}
