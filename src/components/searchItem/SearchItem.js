import React from "react";
import "./searchItem.css";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
          <h1 className="siTitle">Sheraton Palace Hotel</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airpot taxi</span>
          <span className="siSubtitle">Lujosa swit</span>
          <span className="siFeatures">Swit precidencial · 2 banos · 50 m² · Cama tamano King </span>
          <span className="siCancelOp">Cancelacion sin cargo</span>
          <span className="siCancelOpSubtitle">Aprobecha este precio, puedes cancelar despues.</span>
      </div>
      <div className="siDetails">
          <div className="siDetailsRating">
              <span>Exelente</span>
              <button>9.9</button>
          </div>
          <div className="siDetailsTexts">
              <span className="siPrice">$69420</span>
              <span className="siTaxOp">No incluye impuestos</span>
              <button className="siCheckButton">Ver disponibilidad</button>
          </div>
      </div>
    </div>
  );
};

export default SearchItem;
