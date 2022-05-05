import React from 'react'
import Banner from './Banner'
import Slide from './Slide';
import "../home/home.css";



const Maincomp = () => {

    return (
        <>
            <div className="home_section">
                <div className="banner_part">
                    <Banner />
                </div>
                <div className='home_product'>
                    <Slide />
                </div>
            </div>

        </>
    )
}

export default Maincomp;


