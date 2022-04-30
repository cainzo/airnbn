import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
const Hotel = () => {

  const [slideN, setSliderN]= useState()
  const [open, setOpen]= useState(false)
  const photos = [
    {
      src: "https://images.pexels.com/photos/1879066/pexels-photo-1879066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      src: "https://images.pexels.com/photos/975630/pexels-photo-975630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      src: "https://images.pexels.com/photos/1879066/pexels-photo-1879066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      src: "https://images.pexels.com/photos/975630/pexels-photo-975630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
     {
      src: "https://images.pexels.com/photos/1879066/pexels-photo-1879066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      src: "https://images.pexels.com/photos/975630/pexels-photo-975630.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  const handleOpen = (i) =>{
      setOpen(true)
      setSliderN(i)
  }
  const handleMove = (direction) => {
    let newSlideN;

    if (direction === "l") {
      newSlideN = slideN === 0 ? 5 : slideN - 1;
    } else {
      newSlideN = slideN === 5 ? 0 : slideN + 1;
    }

    setSliderN(newSlideN)
  };

  return (
    <div>
      <Navbar></Navbar>
      <Header type="list"></Header>
      <div className="hotelContainer">
      {open && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark}className='close' onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft}className='arrow'onClick={() => handleMove("l")} />
            <div className="sliderWrapper">
                <img src={photos[slideN].src} alt="" className="sliderIMG" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight}className='arrow' onClick={() => handleMove("r")}/>
        </div>}
        <div className="hotelwrapper">
          <h1 className="hotelTitle">Nombre del hotel</h1>
          <button className="bookNow">Reserve ahora pa</button>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>La direccion del hotel</span>
          </div>
          <span className="hotelDistance">500m from center</span>
          <span className="hotelPriceHighLight">
            Reseva ahora y obten taxis gratis desde y hasta el aeropuerto
          </span>
          <div className="hotelImages">
            {photos.map((foto,i) => (
              <div className="hotelImgWrapper">
                <img onClick={()=>handleOpen(i)} src={foto.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Este es el titulo del hotel</h1>
              <p className="hotelDesc">
                Esta es la descripcion dle hotel Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Numquam, odio?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Numquam, odio?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Numquam, odio?
              </p>
            </div>
            <div className="hotelDetailsPrice">
                <h1>Perfecto para 7 noches</h1>
                <span>Descripcion pequena</span>
                <h2>
                    <b>$69420</b>(7 noches)
                </h2>
                <button>Reserve ahora</button>
            </div>
          </div>
        </div>
        <MailList></MailList>
        <Footer></Footer>
        
      </div>
    </div>
  );
};

export default Hotel;
