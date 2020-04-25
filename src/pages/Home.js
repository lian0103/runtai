import React from "react";
import CarouselBlock from '../components/CarouselBlock';
import InfoBlock from '../components/InfoBlock';
import PreferentialBlock from '../components/PreferentialBlock';

const Home = (props) => {

    return (
        <>
            <CarouselBlock />
            <InfoBlock />
            <PreferentialBlock/>
        </>
    )
}

export default Home;