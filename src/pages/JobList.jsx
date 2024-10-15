import React, { useEffect, useState } from 'react'
import { fetchJobs } from '../services/JobService'
import JobCard from '../components/JobCard'

const JobList = () => {

    const [jobs, setJob] = useState([])

    useEffect(() => {
        const getJobs = async () => {
            try {
                const response = await fetchJobs()
                setJob(response);
            }
            catch (error) {
                console.log("Error")
            }
        };
        getJobs();
    }, []);


    return (
        <div>
            <h1 className='text-center'>Available jobs</h1>
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    )
}

export default JobList