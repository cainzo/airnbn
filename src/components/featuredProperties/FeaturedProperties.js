import React from "react";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nombre de la prop</span>
        <span className="fpCity">Localidad</span>
        <span className="fpPrice">desde $42069</span>
        <div className="fpRating">
          <button>6.9</button>
          <span>Perfecto!</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nombre de la prop</span>
        <span className="fpCity">Localidad</span>
        <span className="fpPrice">desde $42069</span>
        <div className="fpRating">
          <button>6.9</button>
          <span>Perfecto!</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Nombre de la prop</span>
        <span className="fpCity">Localidad</span>
        <span className="fpPrice">desde $42069</span>
        <div className="fpRating">
          <button>6.9</button>
          <span>Perfecto!</span>
        </div>
      </div>
      
    </div>
  );
};

export default FeaturedProperties;
