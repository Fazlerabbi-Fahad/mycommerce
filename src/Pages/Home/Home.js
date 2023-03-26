import React from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import img6 from "./../../Images/Banner/img6.jpg";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-10'>
                <h1 className='text-5xl'>
                    <Link to='/login'>Buy Accessories</Link>
                </h1>
                <img src={img6} className='w-[80%] lg:ml-[120px] ml-[40px] rounded-2xl mt-5' alt="" />
            </div>
            <div>
                <h1 className='text-5xl'>
                    Products
                </h1>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home; 