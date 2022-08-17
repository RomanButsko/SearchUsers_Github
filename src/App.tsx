import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage';
import Favourites from './pages/FauvoritesPages';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path='/favourites' element={<Favourites />} /> 
    </Routes>
  </>
  );
}

export default App;
