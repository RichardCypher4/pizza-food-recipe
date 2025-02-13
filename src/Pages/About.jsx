
import React from 'react'
import cypher from '../assets/aboutus.webp'
import '../style/About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop'
      style={{ backgroundImage: `url(${cypher})` }}>
      </div>
      <div className='aboutBottom'>
      <h1>ABOUT US</h1>
      <p>
      The first pizza ordered by a computer happened in 1974: they needed to test out their ‘speaking computer’ 
      so they ordered a pepperoni, mushroom, ham, and sausage pizza from a local pizza joint. 
      Many famous people started out making and delivering Pizzas. Stephen Baldwin and Bill Murray both made pizza and Jean
      Pizza is one of the oldest dishes still around today, and you can even make and enjoy pizza that is very similar to what the Italians would have eaten 500 years ago.
       That version more closely resembles the focaccia we eat today. 
       It was created by Neapolitans, or the locals of Naples, as an easy and inexpensive street food that would be topped with various local ingredients and eaten on the go.
      </p>
      </div>
    </div>
  )
}

export default About
