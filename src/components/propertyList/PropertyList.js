import React from 'react';
import './propertyList.css'
const PropertyList = () => {
    return (
        <div className='pList'>
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hoteles</h1>
                    <h2>69.420</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Apartamentos</h1>
                    <h2>69.420</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Casas</h1>
                    <h2>69.420</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>69.420</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/950058/pexels-photo-950058.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabanas</h1>
                    <h2>69.420</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;