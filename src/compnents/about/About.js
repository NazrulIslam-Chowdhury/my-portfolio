import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsPerson, BsFillBootstrapFill } from 'react-icons/bs';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss, SiJavascript, SiReact, SiMongodb } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';

import sig from '../../assets/IMG_20221213_173341.png';

const About = () => {
    return (
        <div className='container mx-auto px-4'>
            <div>
                <div className='flex items-center justify-between'>
                    <p className='font uppercase ml-4 mt-4 text-blue-300 font-semibold text-3xl'>about me .</p>
                    <BsPerson className='lg:h-16 md:h-16 h-12 lg:w-16 md:w-16 w-12 text-blue-300 mr-4 mt-2' />
                </div>
                <hr style={{
                    border: '0.5px dashed gray',
                    margin: '15px 15px 0 15px'
                }} />
            </div>
            <div className='mt-4 flex flex-col md:flex-row lg:flex-row gap-x-56 gap-y-10'>
                <div className='ml-3'>
                    <p className='font uppercase font-bold text-3xl text-white'>Front-end & Mern stack developer</p>
                    <p className='font mt-3'>Hello World! I'm Nazrul Islam,a front-End Web Developer & a MERN Developer. <br /><br />
                        I started my coding journey almost exactly a year ago and now I'm working full time and doing freelance projects on the side for my friends. You may have noticed from my portfolio, but I'm obsessed with unique, interesting design and user-friendly functionality so hit me up with your artistic project ideas or app proposals.
                        <br /><br />
                        <strong>Technology leads, society follows.</strong> The move towards increasing inclusivity and diversity in the industry through representational is of importance to me. <br /><br />
                        I'm excited to make the leap and continue my skills with the right company.
                    </p>
                    <img className='mt-2' src={sig} alt="" />
                </div>
                <div className='lg:mr-4'>
                    <p className='font uppercase font-bold text-xl text-white underline'>personal details</p>
                    <div className='font mt-2'>
                        <p><span className='text-lg font-semibold'>Name:</span> Nazrul Islam Chowdhury</p>
                        <p><span className='text-lg font-semibold mt-1'>Age:</span> 25</p>
                        <p><span className='text-lg font-semibold mt-1'>Residence:</span> Noakhali,Bangladesh</p>
                        <p><span className='text-lg font-semibold mt-1'>Address:</span> </p>
                        <p><span className='text-lg font-semibold mt-1'>Email:</span> nazrulislam66188@gmail.com</p>
                        <p><span className='text-lg font-semibold mt-1'>Phone:</span> +8801706541548</p>
                        <a href="https://drive.google.com/file/d/1CEEncGAVQkM8yBPEw2_5mlqxpQAaHSKk/view?usp=share_link"><button className='font btn btn-outline mt-3'>RESUME</button></a>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className='font text-center font-extrabold text-3xl text-blue-300'>Skills
                    <hr style={{ margin: '0 45% 0 45%', border: '2px solid skyBlue' }} />
                </h1>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-5 gap-x-5 gap-y-7'>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><AiFillHtml5 className='h-14 w-14 text-red-400' /></h2>
                            <h1 className='text-xl font-semibold font text-white'>HTML 5</h1>
                            <p className='font text-white'>I'm using HTML almost 1 year now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><DiCss3 className='h-14 w-14 text-blue-500' /></h2>
                            <h1 className='text-xl font-semibold font'>CSS3</h1>
                            <p className='font'>I'm using CSS almost 1 year now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><SiTailwindcss className='h-14 w-14 text-sky-400' /></h2>
                            <h1 className='text-xl font-semibold font'>TIALWIND CSS</h1>
                            <p className='font'>I'm using TAILWIND almost 1 year now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><BsFillBootstrapFill className='h-14 w-14 text-violet-400' /></h2>
                            <h1 className='text-xl font-semibold font'>BOOTSTRAP</h1>
                            <p className='font'>I'm using BOOTSTRAP 1 year now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><SiJavascript className='h-14 w-14 text-yellow-300' /></h2>
                            <h1 className='text-xl font-semibold font'>JAVASCRIPT</h1>
                            <p className='font'>I'm using JS 7 months now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><SiReact className='h-14 w-14 text-blue-400' /></h2>
                            <h1 className='text-xl font-semibold font'>REACT JS</h1>
                            <p className='font'>Using REACT JS 6 months now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><FaNode className='h-14 w-14 text-green-500' /></h2>
                            <h1 className='text-xl font-semibold font'>NODE JS</h1>
                            <p className='font'>I'm using NODE JS 6 months now.</p>
                        </div>
                    </div>
                    <div className="card bg-sky-600 shadow-2xl shadow-sky-600 text-white">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title"><SiMongodb className='h-14 w-14 text-green-400' /></h2>
                            <h1 className='text-xl font-semibold font'>MONGO DB</h1>
                            <p className='font'>I'm using MONGO DB 6 months now.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-10'>
                <h1 className='font text-center font-extrabold text-3xl text-blue-300 '>Services
                    <hr style={{ margin: '0 45% 0 45%', border: '2px solid skyBlue' }} />
                </h1>
                <div>
                    <p className='font text-center mt-4'>COMING SOON</p>
                </div>
            </div>
        </div>
    );
};

export default About;