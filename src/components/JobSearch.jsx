import React, { useState } from 'react';
import axios from 'axios';

const JobSearch = () => {
    const [text, setText] = useState('');
    const [jobs, setJobs] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8085/api/search/${text}`);
            setJobs(response.data);
        } catch (error) {
            console.error("Error fetching job data:", error);
        }
    };

    return (
        <div className="job-search-container flex flex-col items-center p-6">
            <input
                type="text"
                placeholder="Search by Profile (e.g., QA)"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full max-w-md p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400"
            />
            <button
                onClick={handleSearch}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
            >
                Search
            </button>

            {jobs.length > 0 && (
                <div className="job-results mt-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="job-card bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
                            <h3 className="text-yellow-300 text-lg font-bold mb-2">{job.profile}</h3>
                            <p className="text-gray-200 mb-2">{job.desc}</p>
                            <p className="text-sm text-gray-400"><strong>Experience:</strong> {job.exp} years</p>
                            <p className="text-sm text-gray-400"><strong>Technologies:</strong> {job.techs.join(', ')}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default JobSearch;
