import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
    return (
        <div className='lg:mt-28 mt-28 md:mt-96'>
            <div className='flex items-center justify-evenly'>
                <a href='https://www.facebook.com/profile.php?id=100008271873050'><AiFillFacebook className='h-5 w-5 hover:text-white' /></a>
                <a href='https://www.linkedin.com/in/nazrul-islam-chowdhury/'><AiFillLinkedin className='h-5 w-5 hover:text-white' /></a>
                <a href='https://github.com/NazrulIslam-Chowdhury'><AiFillGithub className='h-5 w-5 hover:text-white' /></a>
            </div>
            <p className='text-center mt-2'>2022 © Nazrul Islam Chowdhury.
                All Right Reserved.</p>
        </div>
    );
};

export default Footer;