export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    case 'SET_RESULTS':
      return {
        ...state,
        results: action.payload,
      };
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'ADD_MOVIE_TO_WATCHED':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    case 'REMOVE_MOVIE_FROM_WATCHLIST':
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case 'REMOVE_MOVIE_FROM_WATCHED':
      return {
        ...state,
        watched: state.watched.filter((movie) => movie.id !== action.payload),
      };
    case 'MOVE_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'SET_TRENDING_MOVIES':
      return {
        ...state,
        trendingMovies: action.payload,
      };
    case 'SET_TOP_RATED_MOVIES':
      return {
        ...state,
        topRatedMovies: action.payload,
      };
    default:
      return state;
  }
};