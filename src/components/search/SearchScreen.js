import React, { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getAnimeByName } from '../../selectors/getAnimeByName';
import { AnimeCard } from '../anime/AnimeCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const animeFiltred = useMemo(()=> getAnimeByName(q) , [ q ] );

  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`);
  }

  return (

    <>

      <h1>Busqueda</h1>
      <hr/>
      
      <div className="row">

        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>

          <form onSubmit={handleSearch}>
            <input 
              type="text"
              className="form-control"
              onChange={handleInputChange}
              autoComplete="off"
              name="searchText"
              value={searchText}
            />
            <button
              className="btn btn-primary form-control my-2"
              type="submit"
            >Buscar</button>
          </form>

        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr/>

          {
            (q==='') 
              ? <div className="alert alert-info">Buscar un heroe</div>
              : (animeFiltred.length === 0) && <div className="alert alert-danger">No se ha encontrado ningún resultado con {searchText}</div>
          }
          {
            animeFiltred.map(anime => (
              <AnimeCard 
                key={anime.id}
                {...anime}
              />
            ))
          }
        </div>

      </div>
    
    </>

  );
};
