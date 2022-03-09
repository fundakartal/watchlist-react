import Header from 'components/Header';
import HomePage from 'components/HomePage';
import Watchlist from 'components/Watchlist';
import Watched from 'components/Watched';
import Search from 'components/Search';
import Footer from 'components/Footer';
import { GlobalProvider } from './context/GlobalContext';
import { SearchProvider } from './context/SearchContext';
import { Routes, Route } from 'react-router-dom';
import './style.css';

const App = () => {
  return (
    <GlobalProvider>
      <SearchProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Footer />
      </SearchProvider>
    </GlobalProvider>
  );
};
export default App;
