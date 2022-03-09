import { createContext, useReducer } from 'react';
import { AppReducer } from './AppReducer';

const initialState = {
  query: '',
  results: [],
};

export const SearchContext = createContext(initialState);

export const SearchProvider = (props) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const setQuery = (e) => {
    e.preventDefault();
    dispatch({ type: 'SET_QUERY', payload: e.target.value });
  };
  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        !data.errors
          ? dispatch({ type: 'SET_RESULTS', payload: data.results })
          : dispatch({ type: 'SET_RESULTS', payload: [] })
      );
  };
  return (
    <SearchContext.Provider
      value={{
        query: state.query,
        results: state.results,
        setQuery,
        fetchData,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
