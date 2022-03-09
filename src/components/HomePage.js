import React, { useEffect, useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import { MovieCard } from './MovieCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  
  const { trendingMovies, topRatedMovies, fetchTrendingMovies, fetchTopRatedMovies, } =
    useContext(GlobalContext);
  const trendingWeekUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`;
  const trendingDayUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`;
  const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`;

  useEffect(() => {
    fetchTrendingMovies(trendingWeekUrl);
    fetchTopRatedMovies(topRatedUrl);
  }, []);

  const switchBtn = (e) => {
    e.target.parentElement.classList.toggle('active');
    if (e.target.parentElement.classList.contains('active')) {
      fetchTrendingMovies(trendingDayUrl);
    } else {
      fetchTrendingMovies(trendingWeekUrl);
    }
  };

  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    dots: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className='pb-[80px] bg-violet-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center p-6 pl-4 justify-between '>
          <h1 className='font-bold text-xl text-violet-900 dark:text-violet-50 '>
            Trending Movies
          </h1>
          <button
            className='relative font-semibold w-28 h-8 rounded-xl border-[1px] border-green-400 overflow-hidden'
            onClick={switchBtn}
          >
            <span className='inline-flex items-center justify-center w-1/2 h-full text-violet-900 dark:text-violet-100'>
              Day
            </span>
            <span className='inline-flex items-center justify-center w-1/2 h-full text-violet-900 dark:text-violet-100 '>
              Week
            </span>
            <span className='switch transition-all inline-flex absolute top-0 left-0 rounded-xl w-1/2 h-full bg-green-400'></span>
          </button>
        </div>
        <div>
          <Slider {...settings}>
            {trendingMovies.map((movie) => (
              <div key={movie.id} className='rounded-3xl overflow-hidden'>
                <MovieCard movie={movie} type='home' />
              </div>
            ))}
          </Slider>
        </div>
        <h1 className='mt-12 p-6 pl-4 font-bold text-xl text-violet-900 dark:text-violet-50 '>
          Top Rated Movies
        </h1>
        <div>
          <Slider {...settings}>
            {topRatedMovies.map((movie) => (
              <div key={movie.id} className='rounded-3xl overflow-hidden'>
                <MovieCard movie={movie} type='home' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
