import React from 'react';
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className="homeContainer">
                <Featured></Featured>
                <h1 className="homeTitle">Buscar por tipos de alojamientos</h1>
                <PropertyList></PropertyList>
                <h1 className="homeTitle">Cosas que les encanta a los clientes</h1>
                <FeaturedProperties></FeaturedProperties>
                <MailList></MailList>
                <Footer></Footer>
            </div>
            HOMEPAJEPRRO
        </div>
    );
};

export default Home;