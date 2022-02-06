import { animes } from "../data/animes"

export const getAnimeByName = (name='') => {
  
    if(name.length === 0) return [];
  
    return animes.filter(anime => anime.name.toLocaleLowerCase().includes(name));
};
