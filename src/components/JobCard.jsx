import React from 'react'

const JobCard = ({ job }) => {
    return (
        <div className='job-card flex flex-col items-center justify-center w-auto p-4 m-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <h3 className='text-yellow-300 text-lg font-bold mb-2'>{job.profile}</h3>
            <p className='text-gray-200 mb-2 text-center'>{job.desc}</p>
            <p className='text-sm text-gray-400'><strong>Experience:</strong> {job.exp} </p>
            <p className='text-sm text-gray-400'><strong>Technologies:</strong> {job.techs.join(', ')}</p>
        </div>
    )
}


export default JobCard