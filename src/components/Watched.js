import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { MovieCard } from './MovieCard';

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  
  return (
    <div className='pb-[80px] md:pb-5 dark:bg-gray-800'>
      <div className='xl:max-w-7xl mx-auto'>
        <div className='flex justify-between items-center p-4 font-bold text-lg text-violet-900 dark:text-violet-100'>
          Watched List
          {watched.length > 0 && (
            <span className='bg-pink-400 rounded-full px-3 py-1 text-sm font-semibold text-white'>
              {watched.length} {watched.length === 1 ? 'Movie' : 'Movies'}
            </span>
          )}
        </div>
        {watched.length > 0 ? (
          <div className='grid gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {watched.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type='watched' />
            ))}
          </div>
        ) : (
          <div className='w-full h-screen p-4'>
            <h2 className='dark:text-violet-50'>
              No movies in your list, add some...
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default Watched;
