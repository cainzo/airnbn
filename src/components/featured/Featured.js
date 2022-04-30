import React from 'react';
import './featured.css'
const Featured = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Mar del Plate</h1>
                    <h2>re beio</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>La boca</h1>
                    <h2>re beio</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://images.pexels.com/photos/931018/pexels-photo-931018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>El cadillal</h1>
                    <h2>re beio</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;