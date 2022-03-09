import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AiOutlineUnorderedList, AiFillEye, AiOutlineClose } from 'react-icons/ai';


export const MovieControls = ({ movie, type }) => {
  
  const {
    watchlist,
    watched,
    addMovieToWatchlist,
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeMovieFromWatched,
    moveMovieToWatchlist,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((m) => m.id === movie.id);
  let watchedMovie = watched.find((m) => m.id === movie.id);

  const watchlistDisabled = storedMovie ? true : watchedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;

  return (
    <>
      {type === 'watchlist' && (
        <div className='flex gap-x-10 text-white'>
          <button
            onClick={() => addMovieToWatched(movie)}
          >
            <AiFillEye size='28' />
          </button>
          <button
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <AiOutlineClose size='28' />
          </button>
        </div>
      )}

      {type === 'watched' && (
        <div className='flex gap-x-10 text-white'>
          <button
            onClick={() => moveMovieToWatchlist(movie)}
          >
            <AiOutlineUnorderedList size='28' />
          </button>
          <button
            onClick={() => removeMovieFromWatched(movie.id)}
          >
            <AiOutlineClose size='28' />
          </button>
        </div>
      )}
      {type === 'home' && (
        <div className='flex gap-x-10 text-white'>
          <button className='disabled:opacity-20'
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            <AiOutlineUnorderedList size='28' />
          </button>
          <button className='disabled:opacity-20'
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            <AiFillEye size='28' />
          </button>
        </div>
      )}
    </>
  );
};
