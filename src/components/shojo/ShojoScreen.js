import React from 'react';
import { AnimeList } from '../anime/AnimeList';

export const ShojoScreen = () => {
  return (
    <div className="container my-2">
      
      <h1>Shojo Screen</h1>
      <hr/>

      <AnimeList demography="Shojo" />
    </div>
  );
};
