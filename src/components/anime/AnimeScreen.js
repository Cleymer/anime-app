import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getAnimeById } from '../../selectors/getAnimeById';

export const AnimeScreen = () => {
  
  const { animeId } = useParams();

  const anime = useMemo(() => getAnimeById(animeId), [animeId]);
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  } 

  if(!anime){
    return <Navigate to="/" />
  }

  const {
    name,
    demography, 
    chapters, 
    img,
    autor,
    genre,
    state
  } = anime;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={img}
          alt={name}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h2> { name }  </h2>
        <ul className="list-group">
          <li className="list-group-item"> <b>Demografia:</b> {demography} </li>
          <li className="list-group-item"> <b>Capitulos:</b> {chapters} </li>
          <li className="list-group-item"> <b>Autor:</b> {autor} </li>
          <li className="list-group-item"> <b>Géneros:</b> {genre} </li>
        </ul>
        <h5 className="my-3">{state}</h5>
        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Regresar...
        </button>
      </div>
    </div>
  );
};
