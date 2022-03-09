import { createContext, useEffect, useReducer } from 'react';
import { AppReducer } from './AppReducer';
// initialState
const initialState = {
  watchlist: localStorage.getItem('watchlist')
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [],
  watched: localStorage.getItem('watched')
    ? JSON.parse(localStorage.getItem('watched'))
    : [],
  trendingMovies: [],
  topRatedMovies: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
    localStorage.setItem('watched', JSON.stringify(state.watched));
  }, [state]);

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const addMovieToWatched = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
  };

  const moveMovieToWatchlist = (movie) => {
    dispatch({ type: 'MOVE_MOVIE_TO_WATCHLIST', payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  const removeMovieFromWatched = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: id });
  };

  const fetchTrendingMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: 'SET_TRENDING_MOVIES', payload: data.results });
  };
  const fetchTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    dispatch({ type: 'SET_TOP_RATED_MOVIES', payload: data.results });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
        addMovieToWatched,
        removeMovieFromWatchlist,
        removeMovieFromWatched,
        moveMovieToWatchlist,
        fetchTrendingMovies,
        fetchTopRatedMovies,
        trendingMovies: state.trendingMovies,
        topRatedMovies: state.topRatedMovies,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
