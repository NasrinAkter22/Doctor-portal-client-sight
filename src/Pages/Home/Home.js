import React from 'react';
import Banner from './Banner/Banner';
import Dental from './Dental';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Sevices from './Sevices';








const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Sevices></Sevices>
            <Dental></Dental>
            <MakeAppoinment></MakeAppoinment>












        </div>
    );
};

export default Home;