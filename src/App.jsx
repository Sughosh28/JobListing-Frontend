import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './pages/JobList';
import AddJob from './pages/AddJob';
import JobSearch from './components/JobSearch';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/search-job" element={<JobSearch />} />
        </Routes>
    </Router>
);

export default App;
