import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../Images/Banner/img1.jpg";
import img2 from "../../../Images/Banner/img2.jpg";
import img3 from "../../../Images/Banner/img3.jpg";
import img4 from "../../../Images/Banner/img4.jpg";
import img5 from "../../../Images/Banner/img5.jpg";

const Banner = () => {
    return (
        <div>
            <div className="carousel lg:w-[90%] lg:ml-20">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img1})` }}>
                        <div className="hero-overlay"></div>
                        <div className='text-center'>
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">HOT DEALS <br></br>ENJOY UPTO TK 12,000 OFF</h1>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                    <Link to='/signup'>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img2})` }}>
                        <div className="hero-overlay"></div>
                        <div className='text-center'>
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">UNCONDITIONAL <br></br>FREE SHOPPING</h1>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                    <Link to='/signup'>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img3})` }}>
                        <div className="hero-overlay"></div>
                        <div className='text-center'>
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">BUT EVERYTHING <br></br>ON MyCommerce</h1>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                    <Link to='/signup'>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img4})` }}>
                        <div className="hero-overlay"></div>
                        <div className='text-center'>
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">DISCOVER <br></br>YOUR EID LOOK</h1>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                    <Link to='/signup'>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${img5})` }}>
                        <div className="hero-overlay"></div>
                        <div className='text-center'>
                            <div>
                                <h1 className="mb-5 text-5xl font-bold">GLAM UP <br></br>THIS EID</h1>
                                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                    <Link to='/signup'>Sign Up</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Banner;