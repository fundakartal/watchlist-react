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

const Header = () => {
  const toggleMenu = () => {
    const social = document.querySelector('.social');
    if (social.classList.contains('-left-full')) {
      social.classList.remove('-left-full');
      social.classList.add('left-0');
    } else {
      social.classList.add('-left-full');
      social.classList.remove('left-0');
    }
  };

  return (
    <header className='relative md:static flex items-center h-16 bg-violet-200 text-violet-900 dark:bg-violet-900 dark:text-violet-200'>
      <div className='flex items-center px-4 w-full max-w-7xl justify-between mx-auto'>
        <button className='menu md:hidden' onClick={toggleMenu}>
          <AiOutlineMenu size='28' />
        </button>
        <Link to='/'>
          <div className='flex gap-x-2'>
            <RiMovie2Line size='28' />
            <div className='text-lg md:text-xl font-bold'>Watchlist</div>
          </div>
        </Link>
        <nav className='md:static md:justify-center flex items-center justify-between md:gap-x-10 fixed bottom-0 left-0 w-full z-20 px-4 h-16 bg-violet-200 text-violet-900 dark:bg-violet-900 dark:text-violet-200 font-semibold'>
          <Link to='/'>
            <div className='flex flex-col md:flex-row md:gap-x-2 md:bg-violet-300 md:hover:bg-violet-400 md:p-2 md:rounded-2xl  dark:md:text-violet-900 transition-all items-center'>
              <AiFillHome size='24' />
              <span className=''>Home</span>
            </div>
          </Link>
          <Link to='/watchlist'>
            <div className='flex flex-col md:flex-row md:gap-x-2 md:bg-violet-300 md:hover:bg-violet-400 md:p-2 md:rounded-2xl  dark:md:text-violet-900 transition-all items-center'>
              <AiOutlineUnorderedList size='24' />
              <span className=''>Watchlist</span>
            </div>
          </Link>
          <Link to='/watched'>
            <div className='flex flex-col md:flex-row md:gap-x-2 md:bg-violet-300 md:hover:bg-violet-400 md:p-2 md:rounded-2xl  dark:md:text-violet-900 transition-all items-center'>
              <AiFillEye size='24' />
              <span className=''>Watched</span>
            </div>
          </Link>
          <Link to='/search'>
            <div className='flex flex-col md:flex-row md:gap-x-2 md:bg-violet-300 md:hover:bg-violet-400 md:p-2 md:rounded-2xl  dark:md:text-violet-900 transition-all items-center'>
              <AiOutlineSearch size='24' />
              <span className=''>Search</span>
            </div>
          </Link>
        </nav>
        <div>
          <ToggleTheme />
        </div>
        <div className='social md:hidden flex flex-col items-center p-5 gap-y-5 absolute top-full w-full  bg-violet-200 dark:bg-violet-900 z-20 -left-full transition-all'>
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
