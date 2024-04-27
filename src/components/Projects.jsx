import React from 'react';
import '../Styles/Projects.css';

function Projects({ project }) {
  return (
    <div id='projects'>
      <h1 className='text-5xl mt-36 ml-20 md:mt-36 ml-4 md:ml-20'>Projects</h1>
      <div className="h-full w-screen flex flex-wrap justify-center md:ml-0 md:mr-0 md:pl-20 md:pr-20">
        {project.map((project, index) => (
          <div key={index} className='card bg-gray-400 border border-gray m-5 ml-12 h-auto  md:h-80 w-full md:w-1/3 lg:w-96 transition-colors duration-300 hover:bg-purple-500 z-index' style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
            <div className='h-52 md:h-64 w-full'>
              <img className='w-full h-full object-cover' src={project.image.url} alt="" />
            </div>
            <h4 className='p-5 hover:text-black'>{project.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
