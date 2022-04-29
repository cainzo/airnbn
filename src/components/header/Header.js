import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCab,
  faCalendarDays,
  faCar,
  faLocation,
  faLocationDot,
  faPerson,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import React, { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format } from 'date-fns'
import "./header.css";

const Header = ({type}) => {

  const [openDate, setOpenDate]=useState(false)
  const [openOptions, setOpenOptions]=useState(false)
  const [options, setOptions]=useState({
      adult: 1,
      children: 0,
      rooms: 1
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);


  const handleOption = (name, operation)=>{
        setOptions(prev=>{
            return{
            ...prev, [name]: operation === "i" ? options[name] +1 :  options[name] -1,
        }})
  }


  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCab} />
            <span>Rental Cars </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Taxis </span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Attractions </span>
          </div>
        </div>
        { type!="list" && <> <h1 className="headerTitle">Viaja por argentina.</h1>
        <p className="headerDesc">
          Plataforma para encontrar los mejores hoteles y vuelos dentro del
          pais. Nosotros nos preocupamos asi vos puedas disfrutar{" "}
        </p>
        <button className="headerButton"> Logeate / Registrate</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPlane} className="headerIcon" />
            <input
              type="text"
              placeholder="Donde quieres ir?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=>{setOpenDate(!openDate) }} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`} </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>{setOpenOptions(!openOptions) }} className="headerSearchText">
              {`${options.adult} adults - ${options.children} children - ${options.rooms} room`}
            </span>
            {openOptions && <div className="options">
                <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                    <button disabled={options.adult === 1} className="optionCounterButton" onClick={()=>{handleOption("adult", "d")}}>-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterButton"onClick={()=>{handleOption("adult", "i")}}>+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button disabled={options.children === 0} className="optionCounterButton"onClick={()=>{handleOption("children", "d")}}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton"onClick={()=>{handleOption("children", "i")}}>+</button>
                    </div>
                </div><div className="optionsItem">
                    <span className="optionText">Rooms</span>
                    <div className="optionCounter">
                    <button disabled={options.rooms === 1} className="optionCounterButton"onClick={()=>{handleOption("rooms", "d")}}>-</button>
                    <span className="optionCounterNumber">{options.rooms}</span>
                    <button className="optionCounterButton"onClick={()=>{handleOption("rooms", "i")}}>+</button>
                    </div>
                </div>
            </div>}
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">Buscar</button>
          </div>
        </div> </>}
      </div>
    </div>
  );
};

export default Header;
