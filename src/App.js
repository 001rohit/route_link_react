import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import About from './About';

// const Menu = () => <Link to='/Menu'>Menu</Link>
// const Home1 = () => <Link to='/'>Home</Link>
// const About = () => <Link to='/About'>About</Link>
const Header = () =>{
  return(
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
