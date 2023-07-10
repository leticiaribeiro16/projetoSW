import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateTreino from './CreateTreino';
import ListTreinos from './ListTreinos';
import UpdateTreino from './UpdateTreino';
import DeleteTreino from './DeleteTreino';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListTreinos />} />
        <Route path="/treinos/create" element={<CreateTreino />} />
        <Route path="/treinos/update/:id" element={<UpdateTreino />} />
        <Route path="/treinos/delete/:id" element={<DeleteTreino />} /> 
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
