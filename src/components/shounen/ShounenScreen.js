import React from 'react';
import { AnimeList } from '../anime/AnimeList';

export const ShounenScreen = () => {
  return (
    <div className="my-2"> 
      <h1>Shounen</h1>
      <hr />

      <AnimeList demography="Shounen"/>
    </div>
    
  );
};
