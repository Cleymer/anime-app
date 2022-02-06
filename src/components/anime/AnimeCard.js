import React from "react";
import { Link } from "react-router-dom";

export const AnimeCard = ({ id, name, demography, img }) => {
  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img className="card-img" src={img} alt={name} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title"> {name} </h5>
              <p className="card-text"> {demography} </p>
              <Link to={`/anime/${id}`}>Más....</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
