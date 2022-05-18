import React from 'react';
import Banner from './Banner/Banner';
import Dental from './Dental';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Sevices from './Sevices';
import Testimonials from './Testimonials';








const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info ></Info>
            <Sevices></Sevices>
            <Dental></Dental>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Footer></Footer>













        </div>
    );
};

export default Home;