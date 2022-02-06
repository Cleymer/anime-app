import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ShounenScreen } from '../components/shounen/ShounenScreen';
import { SeinenScreen } from '../components/seinen/SeinenScreen';
import { Navbar } from '../components/ui/Navbar';
import { SearchScreen } from '../components/search/SearchScreen';
import { ShojoScreen } from '../components/shojo/ShojoScreen';
import { AnimeScreen } from '../components/anime/AnimeScreen';

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Routes>
          
          <Route path="shounen" element={<ShounenScreen />}/>
          <Route path="seinen" element={<SeinenScreen />}/>
          <Route path="shojo" element={<ShojoScreen />} />

          <Route path="search" element={<SearchScreen />}/>
          <Route path="anime/:animeId" element={<AnimeScreen />}/>

          <Route path="/" element={<ShounenScreen />}/>

        </Routes>
      </div>
    </>
  );
};
