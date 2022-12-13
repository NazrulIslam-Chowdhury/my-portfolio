import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-500 lg:hidden">
            <div className='navbar-start'>

            </div>
            <div className="navbar-center">
                <Link className="btn btn-ghost font normal-case text-xl">NAZRUL ISLAM CHOWDHURY</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label htmlFor="home-drawer" tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;