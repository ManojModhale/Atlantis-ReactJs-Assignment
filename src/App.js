
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import LoginForm from './Login/login';
import MapApp from './Map/googlemap';
import MoviesScreen from './Movies/MoviesScreen';

function App() {
  return (
  

    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>  
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/map" element={<MapApp />} />
            <Route path="/movies" element={<MoviesScreen />} />
          </Routes>
        </header>
      </div>
    </Router>



  );
}

export default App;
