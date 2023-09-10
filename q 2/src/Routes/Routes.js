import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainList from '../components/TrainList';
import TrainDetail from '../components/TrainDetails';

function Root() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TrainList />} />
        <Route path="/trains/:id" element={<TrainDetail />} />
      </Routes>
    </Router>
  );
}

export default Root;
