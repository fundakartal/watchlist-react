import { useContext, useEffect } from 'react';
import { MovieCard } from './MovieCard';
import { SearchContext } from '../context/SearchContext';

const Search = () => {
  const { query, results, setQuery, fetchData } = useContext(SearchContext);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
  useEffect(() => {
    fetchData(url);
  }, [query]);

  return (
    <div className='pb-[80px] md:pb-5 bg-violet-50 dark:bg-gray-800 min-h-[calc(100vh_-_128px)]'>
      <div className='xl:max-w-7xl mx-auto'>
        <div className='flex flex-col items-center pt-4 pb-8 '>
          <input
            className='w-9/12 p-2 border-2 rounded-xl placeholder:text-violet-900 focus:outline-violet-400'
            type='text'
            placeholder='Search for a movie'
            value={query}
            onChange={(e) => {
              setQuery(e);
            }}
          />
        </div>
        {results.length > 0 && (
          <div className='grid gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {results
              .filter((movie) => movie.poster_path !== null)
              .map((movie) => (
                <MovieCard key={movie.id} movie={movie} type='home' />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Search;
