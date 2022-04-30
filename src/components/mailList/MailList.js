import React from 'react';
import './mailList.css'
const MailList = () => {
    return (
        <div className='mail'>
            <h1 className="mailTitle"> Ahorre tiempo y dinero!</h1>
            <span className="mailDesc">Registrece, lo mantendremos al tanto de las ultimas promociones y noticias.</span>
            <div className="mailInputContainer">
                <input type="email" placeholder='Your Email!' />
                <button>Subcribite</button>
            </div>
            
        </div>
    );
};

export default MailList;