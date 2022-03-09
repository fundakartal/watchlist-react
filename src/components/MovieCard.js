import { MovieControls } from './MovieControls';
import { useState, useEffect } from 'react';

export const MovieCard = ({ movie, type }) => {

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
    const fetchGenres = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setGenres(data.genres);
    };
    fetchGenres(url);
  }, []);

  const movieGenres = [];
  genres.map((genre) => {
    if (movie.genre_ids.includes(genre.id)) {
      movieGenres.push(genre.name);
    }
  });

  return (
    <div className='rounded px-4 flex flex-col gap-y-4'>
      <div className='group relative max-w-full mx-auto '>
        <img
          className='rounded-3xl '
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />

        <div className='absolute top-6 right-8 bg-violet-900 rounded-xl px-3 py-2 text-lg font-semibold text-white'>
          {movie.release_date ? movie.release_date.substring(0, 4) : '-'}
        </div>
        <div className='absolute top-6 left-8 bg-violet-900 rounded-xl px-3 py-2 text-lg font-semibold text-white'>
          {movie.vote_average ? movie.vote_average : '-'}
        </div>
        <div className='flex items-center justify-center opacity-0 absolute w-full h-10 bg-violet-900 group-hover:opacity-60 rounded-b-3xl bottom-0 transition-all'>
          <MovieControls movie={movie} type={type} />
        </div>
      </div>

      <div className='flex flex-col gap-y-4 bg-violet-100 dark:bg-gray-700 p-10 pt-40 -mt-40 rounded-3xl'>
        <div className='font-bold text-lg text-violet-900 dark:text-violet-50'>
          {movie.title}
        </div>
        <div className='flex flex-wrap gap-2'>
          {movieGenres.map((genre, i) => (
            <span
              key={i}
              className='bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-white'
            >
              {genre}
            </span>
          ))}
        </div>

        <div>
          {movie.overview.length > 200 ? (
            <p className='leading-8 text-gray-600 dark:text-violet-50'>
              {movie.overview.substring(0, 200)}...
            </p>
          ) : (
            <p className='leading-8 text-gray-600 dark:text-violet-50'>
              {movie.overview}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
