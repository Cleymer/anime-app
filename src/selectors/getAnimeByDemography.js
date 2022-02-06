import { animes } from "../data/animes";

export const getAnimeByDemography = (demography) => {
    
    const validDemograpgy = ['Shounen', 'Shojo', 'Seinen'];
    if( !validDemograpgy.includes(demography) ){
        throw new Error("no se");
    }
    
    return animes.filter( anime => anime.demography === demography );
};
