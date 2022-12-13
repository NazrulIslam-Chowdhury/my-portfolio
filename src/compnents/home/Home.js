import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div style={{
            backgroundImage: "url('https://wallpaperaccess.com/full/5246903.jpg')",
            position: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: 'auto',
            filter: 'brightness(75%)'
        }} className='flex flex-col items-center justify-center'>
            <p className='uppercase text-6xl font text-white'>nazrul <span className='font-extrabold text-sky-700'>Islam</span></p>
            <div className='wrapper flex gap-x-2 mt-3'>
                <p className='text-4xl text-white font-semibold'>I'm a </p>
                <span className='developer font-bold'>Web...Developer</span>
            </div>
        </div>
    );
};

export default Home;