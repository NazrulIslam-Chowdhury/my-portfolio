import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import logo1 from '../../assets/favicon 1.ico';
import logo2 from '../../assets/favicon 2.ico';
import logo3 from '../../assets/favicon 3.ico';
import logo4 from '../../assets/favicon 4.png';



const Projects = () => {
  return (
    <div className='container mx-auto px-4'>
      <div>
        <p className='font uppercase ml-4 mt-4 text-blue-300 font-semibold text-3xl'>my projects .</p>
        <hr style={{
          border: '0.5px dashed gray',
          margin: '15px 15px 0 15px'
        }} />
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-5 gap-x-10 gap-y-10'>
        <div className="card lg:w-auto md:w-80 sm:w-auto bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-t-none">
          <figure><img src={logo2} alt="Project1 logo" className='bg-black h-72 w-full' /></figure>
          <div className="card-body">
            <h2 className="font card-title">Educavo</h2>
            <div>
              <p className='font'>Features:</p>
              <ul className='list-disc font'>
                <li>6 courses with pdf downloader.</li>
                <li>Authentication system.</li>
                <li>Dark mode.</li>
              </ul>
            </div>
            <div className="card-actions justify-between">
              <a href='https://educavo-e1956.web.app'><button className="btn btn-outline font flex items-center gap-x-1"><FaLink /> Live site</button></a>
              <a href='https://github.com/NazrulIslam-Chowdhury/educavo'><button className="btn btn-outline font flex items-center gap-x-1"><FaGithub /> Git</button></a>
            </div>
          </div>
        </div>
        <div className="card lg:w-auto md:w-auto sm:w-auto  bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-t-none">
          <figure><img src={logo1} alt="Project2 logo" className='bg-black h-72 w-full' /></figure>
          <div className="card-body">
            <h2 className="card-title font">Bike Scape</h2>
            <div>
              <p className='font'>Features:</p>
              <ul className='list-disc font'>
                <li>Users can buy a product or sell a product.</li>
                <li>Authentication system.</li>
                <li>Payment method</li>
                <li>Seller route,Buyer route and Admin route.</li>
              </ul>
            </div>
            <div className="card-actions justify-between bottom-1">
              <a href='https://bike-scape.web.app'><button className="btn btn-outline font flex item-center gap-x-1"><FaLink />Live site</button>
              </a>
              <a href='https://github.com/NazrulIslam-Chowdhury/bike-scape'><button className="btn btn-outline font flex items-center gap-x-1"><FaGithub />Git</button>
              </a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 md:w-80 sm:w-auto  bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-t-none">
          <figure><img src={logo3} alt="Project3 logo" className='bg-black h-72 w-full' /></figure>
          <div className="card-body">
            <h2 className="card-title font">Wildlia</h2>
            <p className='font'>Features:</p>
            <ul className='list-disc font'>
              <li>Authentication system.</li>
              <li>Users can add a service.</li>
              <li>Users can comment on a service,Delete a comment and edit a comment</li>
            </ul>
            <div className="card-actions justify-between">
              <a href="https://wildlia-58185.web.app"><button className="btn btn-outline font flex items-center gap-x-1"><FaLink />Live site</button>
              </a>
              <a href='https://github.com/NazrulIslam-Chowdhury/wildlia'><button className="btn btn-outline font flex items-center gap-x-1"><FaGithub />Git</button></a>
            </div>
          </div>
        </div>
        <div className="card lg:w-96 md:w-80 sm:w-auto  bg-cyan-500 shadow-2xl shadow-cyan-500/50 rounded-t-none">
          <figure><img src={logo4} alt="Project3 logo" className='bg-black h-72 w-full' /></figure>
          <div className="card-body">
            <h2 className="card-title font">Quizzical</h2>
            <p className='font'>Features:</p>
            <ul className='list-disc font'>
              <li>User can check their knowledge in different topics in Web Developing.</li>
              <li>User can see the correct ans of every question.</li>
              <li>If your ans is correct or wrong a toast will open to notify you.</li>
            </ul>
            <div className="card-actions justify-between">
              <a href="https://resplendent-kangaroo-998707.netlify.app/"><button className="btn btn-outline font flex items-center gap-x-1"><FaLink />Live site</button></a>
              <a href='https://github.com/NazrulIslam-Chowdhury/quizzical'><button className="btn btn-outline font felx items-center gap-x-1"><FaGithub />Git</button></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;