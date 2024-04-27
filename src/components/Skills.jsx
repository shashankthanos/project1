import React from 'react';

function Skills({ skill }) {
  return (
    <div className='skill h-max w-screen' id='skill'>
      <h1 className='text-5xl ml-4 md:ml-20 mt-96 lg:mt-40'>Skills</h1>
      <div className='skills w-full md:w-11/12 h-auto md:h-screen flex flex-wrap justify-between items-center md:ml-20 mt-4 md:mt-20'>
        {skill.map((skill, index) => (
          <div key={index} className='w-full md:w-1/2 lg:w-1/3 px-4 mt-4 md:mt-0'>
            <div className='flex items-center'>
              <h1 className='text-xl bg-fuchsia-950 gray text-white px-5 py-2 m-1 md:m-5 rounded-xl'>{skill.name}</h1>
              <span><img className='h-8 md:h-10' src={skill.image.url} alt="loading..." /></span>
            </div>
            <div className='flex items-center'>
              <input type="range" name="" id="" value={skill.percentage} readOnly className='w-4/5 h-1 appearance-none rounded-full bg-purple-400 outline-none' style={{
                background: 'linear-gradient(to right, purple 0%, purple ' + skill.percentage + '%, #E5E7EB ' + skill.percentage + '%, #E5E7EB 100%)',
              }} />
              <span className="ml-2">{skill.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
