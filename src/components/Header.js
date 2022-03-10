import { Link } from 'react-router-dom';
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiFillEye,
  AiOutlineSearch,
  AiOutlineMenu,
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMail,
} from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';
import ToggleTheme from 'components/ToggleTheme';
import { useRef } from 'react';

const Header = () => {
  const social = useRef();
  const toggleMenu = () => {
    if (social.current.classList.contains('-left-full')) {
      social.current.classList.remove('-left-full');
      social.current.classList.add('left-0');
    } else {
      social.current.classList.add('-left-full');
      social.current.classList.remove('left-0');
    }
  };

  return (
    <header className='relative flex h-16 items-center bg-violet-200 text-violet-900 dark:bg-violet-900 dark:text-violet-200 md:static'>
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-4'>
        <button className='menu md:hidden' onClick={toggleMenu}>
          <AiOutlineMenu size='28' />
        </button>
        <Link to='/'>
          <div className='flex gap-x-2'>
            <RiMovie2Line size='28' />
            <div className='text-lg font-bold md:text-xl'>Watchlist</div>
          </div>
        </Link>
        <nav className='fixed bottom-0 left-0 z-20 flex h-16 w-full items-center justify-between bg-violet-200 px-4 font-semibold text-violet-900 dark:bg-violet-900 dark:text-violet-200 md:static md:justify-center md:gap-x-10'>
          <Link to='/'>
            <div className=' flex flex-col items-center transition-all md:flex-row md:gap-x-2 md:rounded-2xl md:bg-violet-300  md:p-2 md:hover:bg-violet-400 dark:md:text-violet-900'>
              <AiFillHome size='24' />
              Home
            </div>
          </Link>
          <Link to='/watchlist'>
            <div className='flex flex-col items-center transition-all md:flex-row md:gap-x-2 md:rounded-2xl md:bg-violet-300  md:p-2 md:hover:bg-violet-400 dark:md:text-violet-900'>
              <AiOutlineUnorderedList size='24' />
              Watchlist
            </div>
          </Link>
          <Link to='/watched'>
            <div className='flex flex-col items-center transition-all md:flex-row md:gap-x-2 md:rounded-2xl md:bg-violet-300  md:p-2 md:hover:bg-violet-400 dark:md:text-violet-900'>
              <AiFillEye size='24' />
              Watched
            </div>
          </Link>
          <Link to='/search'>
            <div className='flex flex-col items-center transition-all md:flex-row md:gap-x-2 md:rounded-2xl md:bg-violet-300  md:p-2 md:hover:bg-violet-400 dark:md:text-violet-900'>
              <AiOutlineSearch size='24' />
              Search
            </div>
          </Link>
        </nav>
        <div>
          <ToggleTheme />
        </div>
        <div
          ref={social}
          className='absolute top-full -left-full z-20 flex w-full flex-col items-center gap-y-5  bg-violet-200 p-5 transition-all dark:bg-violet-900 md:hidden'
        >
          <a href='https://github.com/fundakartal'>
            <AiFillGithub size='28' />
          </a>
          <a href='https://twitter.com/fundakartaI'>
            <AiOutlineTwitter size='28' />
          </a>
          <a href='mailto:kartalfunda01@gmail.com'>
            <AiOutlineMail size='28' />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
