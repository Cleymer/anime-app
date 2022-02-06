import React from 'react';
import { AnimeList } from '../anime/AnimeList';

export const SeinenScreen = () => {
  return (
    <div>

      <h1>Seinen Screen</h1>
      <hr/>

      <AnimeList demography="Seinen" />
    </div>
  );
};
