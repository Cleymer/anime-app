import React, { useMemo } from 'react';
import { getAnimeByDemography } from '../../selectors/getAnimeByDemography';
import { AnimeCard } from './AnimeCard';

export const AnimeList = ({ demography }) => {

    const animes = useMemo(() => getAnimeByDemography(demography), [demography]);

  return (
      <div className='row rows-cols-1 row-cols-md-3 g-3'>
          {
              animes.map( (anime, i) => (
                  <AnimeCard 
                    key={i}
                    {...anime}
                  />
              ))
          }
      </div>
  );
};
