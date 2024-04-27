import React from 'react';

function Timeline({ education, experience }) {
  return (
    <div id='experience'>
      <h1 className='text-5xl mt-12 md:mt-36 ml-20 md:mt-96 ml-20 lg:mt-36 ml-16'>Timeline</h1>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div className='mt-10 md:mt-20 w-full md:w-2/5'>
          <p className='text-5xl'>Experience</p>
          <div className='ml-2 mt-2'> <span className='h-40 border-l border-solid border-black'></span></div>
          {experience.map((company, index) => {
            const startDate = new Date(company.startDate);
            const endDate = new Date(company.endDate);
            const options = { month: 'long', year: 'numeric' };
            const formattedStartDate = startDate.toLocaleString('default', options);
            const formattedEndDate = company.endDate ? endDate.toLocaleString('default', options) : 'Present';
            const isLastCompany = index === experience.length - 1;
            return (
              <div key={index}>
                <div key={company.id} className={index !== 0 ? 'mt-6' : ''}>
                  <strong className='text-3xl'>{company.company_name}</strong>
                  <div className='flex justify-between'>
                    <strong>{company.jobTitle}</strong>
                    <strong>{formattedStartDate}&nbsp; - &nbsp;{formattedEndDate}</strong>
                  </div>
                  {company.bulletPoints.map((points, index) => <p key={index}>{points}</p>)}
                </div>
                {!isLastCompany && <div className='ml-2 mt-2'><span className='h-40 border-l border-solid border-black'></span></div>}
              </div>
            )
          })}
        </div>
        <div className='mt-10 md:mt-20 w-full md:w-2/5'>
          <p className='text-5xl tracking-wide'>Education</p>
          <div className='ml-2 mt-2'> <span className='h-40 border-l border-solid border-black'></span></div>
          {education.map((company, index) => {
            const startDate = new Date(company.startDate);
            const endDate = new Date(company.endDate);
            const options = { month: 'long', year: 'numeric' };
            const formattedStartDate = startDate.toLocaleString('default', options);
            const formattedEndDate = company.endDate ? endDate.toLocaleString('default', options) : 'Present';
            const isLastCompany = index === experience.length - 1;
            return (
              <div key={index}>
                <div key={company.id} className={index !== 0 ? 'mt-6' : ''}>
                  <strong className='text-3xl'>{company.company_name}</strong>
                  <div className='flex justify-between'>
                    <strong>{company.jobTitle}</strong>
                    <strong>{formattedStartDate}&nbsp; - &nbsp;{formattedEndDate}</strong>
                  </div>
                  {company.bulletPoints.map((points, index) => <p key={index}>{points}</p>)}
                </div>
                {!isLastCompany && <div className='ml-2 mt-2'><span className='h-40 border-l border-solid border-black'></span></div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Timeline;
