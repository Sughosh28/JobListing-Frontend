import React, { useState } from 'react';
import { addJob } from '../services/JobService';

const AddJob = () => {
    const [job, setJob] = useState({ profile: '', desc: '', exp: '', techs: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJob({ ...job, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addJob({ ...job, techs: job.techs.split(',').map(tech => tech.trim()) });
            alert('Job added successfully');
            setJob({ profile: '', desc: '', exp: '', techs: '' });
        } catch (error) {
            console.error('Error adding job:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto space-y-4">
    <input 
        name="profile" 
        placeholder="Profile" 
        value={job.profile} 
        onChange={handleInputChange} 
        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400" 
    />
    <textarea 
        name="desc" 
        placeholder="Description" 
        value={job.desc} 
        onChange={handleInputChange} 
        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400 h-32 resize-none" 
    />
    <input 
        name="exp" 
        placeholder="Experience (years)" 
        value={job.exp} 
        onChange={handleInputChange} 
        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400" 
    />
    <input 
        name="techs" 
        placeholder="Technologies (comma-separated)" 
        value={job.techs} 
        onChange={handleInputChange} 
        className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-yellow-400" 
    />
    <button 
        type="submit" 
        className="w-full bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition duration-300"
    >
        Add Job
    </button>
</form>

    );
};

export default AddJob;
