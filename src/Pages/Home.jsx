import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../assets/tom.jpg';
import '../style/Home.css';
import Menu from './Menu'
import About from './About';
import Contact from './Contact';


const Home = () => {
  return (
    <div className=''>
    <section className='home' style={{ backgroundImage: `url(${pic})` }}>
      <div className='headercontainer'>
        <h1>Cypher's Pizza</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button aria-label="Order pizza now">ORDER NOW</button>
        </Link>
      </div>
    </section>
    <Menu/>
    <About/>
    <Contact/>
    </div>
  
    
  );
}

export default Home;
