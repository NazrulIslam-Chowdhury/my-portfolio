import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import img from '../../assets/IMG_20221210_125205.jpg';
import '../../App.css';
import { FaHome } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { HiDocumentText } from 'react-icons/hi';
import { AiFillContacts, AiFillProject } from 'react-icons/ai';
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="home-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="home-drawer" className="drawer-overlay"></label>
                    <ul className="menu  w-56 bg-black text-base">
                        {/* Sidebar content here */}
                        <li>
                            <img src={img} alt="" />
                            <p className="font uppercase text-medium -mt-14 font-medium text-center text-gray-200 bg-sky-700">Nazrul islam chowdhury</p>
                        </li>
                        <li className='flex items-center gap-x-1 mt-2'><Link to='/' className='text-medium text-gray-500 hover:text-white'><FaHome className='h-5 w-5' />HOME</Link></li>
                        <hr style={{ border: '0.5px solid gray' }} />
                        <li className='flex items-center gap-x-1 mt-2'><Link to='/about' className='text-medium text-gray-500 hover:text-white'><BsFillPersonFill className='h-5 w-5' />ABOUT ME</Link></li>
                        <hr style={{ border: '0.5px solid gray' }} />
                        <li className='flex items-center gap-x-1 mt-2'><a
                            href='https://drive.google.com/file/d/1CEEncGAVQkM8yBPEw2_5mlqxpQAaHSKk/view?usp=share_link' className='text-medium text-gray-500 hover:text-white'><HiDocumentText className='h-5 w-5' />RESUME</a></li>
                        <hr style={{ border: '0.5px solid gray' }} />
                        <li className='flex items-center gap-x-1 mt-2'><Link to='/projects' className='text-medium text-gray-500 hover:text-white'><AiFillProject className='h-5 w-5' />PROJECTS</Link></li>
                        <hr style={{ border: '0.5px solid gray' }} />
                        <li className='flex items-center gap-x-1 mt-2'><Link to='/contact' className='text-medium text-gray-500 hover:text-white'><AiFillContacts className='h-5 w-5' />CONTACT</Link></li>
                        <hr style={{ border: '0.5px solid gray' }} />

                        <Footer></Footer>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Main;