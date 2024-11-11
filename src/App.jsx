import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Series from './pages/Series';
import Movies from './pages/Movies';
import InTheaters from './pages/InTheaters';
import Suggest from './pages/Suggest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/in-theaters" element={<InTheaters />} />
            <Route path="/suggest" element={<Suggest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;