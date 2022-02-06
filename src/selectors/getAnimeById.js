import { animes } from "../data/animes";

export const getAnimeById = (id='') => {
  return animes.find(anime => anime.id === id);
};
