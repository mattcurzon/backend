import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Movies/MovieList';
import { BrowserRouter as Router,Routes, Route, Link, NavLink, matchPath } from 'react-router-dom';
import Home from './pages/Home';
import Podcast from './pages/Podcast';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
       <Router>
          <div>
          <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="navbar-header pl-10">
              <NavLink className="navbar-brand ps-4" to="/">Joel Hilton Film Collection</NavLink>
            </div>
            <div className='container'>
              <ul className='navbar-nav flex-grow-1'>
                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/">Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className="nav-link text-dark" to="/movies" >Movies</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-dark" to="/podcast" >Podcast</NavLink>
                </li>
              </ul>
            </div>
          </nav>
           <Routes>
                 <Route path='/' element={< Home />}></Route>
                 <Route path='/movies' element={< MovieList />}></Route>
                 <Route path='/podcast' element={< Podcast />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
export default App;
