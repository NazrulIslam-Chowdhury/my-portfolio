import React from 'react';
import './Project.css';

const Projects = () => {
  return (
    <div className='container mx-auto px-4'>
      <div>
        <p className='font uppercase ml-4 mt-4 text-blue-400 font-semibold text-3xl'>my projects .</p>
        <hr style={{
          border: '0.5px dashed gray',
          margin: '15px 15px 0 15px'
        }} />
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mt-5 gap-y-10'>
        <div className="card w-96 bg-sky-700 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="font card-title">Educavo</h2>
            <p className='font'>Features</p>
            <ul className='list-disc font'>
              <li>6 courses with pdf downloader.</li>
              <li>Authentication system.</li>
              <li>Dark mode.</li>
            </ul>
            <div className="card-actions justify-between">
              <a href='https://educavo-e1956.web.app'><button className="btn btn-outline font">Live site</button></a>
              <a href='https://github.com/NazrulIslam-Chowdhury/educavo'><button className="btn btn-outline font">Git</button></a>
            </div>
          </div>
        </div><div className="card w-96 bg-sky-700 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title font">Bike Scape</h2>
            <p className='font'>Features</p>
            <ul className='list-disc font'>
              <li>Users can buy a product or sell a product.</li>
              <li>Authentication system.</li>
              <li>Payment method</li>
              <li>Seller route,Buyer route and Admin route.</li>
            </ul>
            <div className="card-actions justify-between">
              <a href='https://bike-scape.web.app'><button className="btn btn-outline font">Live site</button>
              </a>
              <a href='https://github.com/NazrulIslam-Chowdhury/bike-scape'><button className="btn btn-outline font">Git</button>
              </a>
            </div>
          </div>
        </div><div className="card w-96 bg-sky-700 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title font">Wildlia</h2>
            <p className='font'>Features:</p>
            <ul className='list-disc font'>
              <li>Authentication system.</li>
              <li>Users can add a service.</li>
              <li>Users can comment on a service,Delete a comment and edit a comment</li>
            </ul>
            <div className="card-actions justify-between">
              <a href="https://wildlia-58185.web.app"><button className="btn btn-outline font">Live site</button>
              </a>
              <a href='https://github.com/NazrulIslam-Chowdhury/wildlia'><button className="btn btn-outline font">Git</button></a>
            </div>
          </div>
        </div><div className="card w-96 bg-sky-700 shadow-xl">
          <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title font">Quizzical</h2>
            <p className='font'>Features:</p>
            <ul className='list-disc font'>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="card-actions justify-between">
              <button className="btn btn-outline font">Live site</button>
              <button className="btn btn-outline font">Git</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;