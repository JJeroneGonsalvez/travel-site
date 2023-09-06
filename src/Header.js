import React from 'react';
import { useState } from 'react';
import './Header.css';
// import About from './About';
// import Home from './Home';
import { NavLink } from 'react-router-dom';
const blue={background:'#884548'};

const white={background:'white'};


export default function Header() {
    const[color,setColor]=useState(blue)
    return (
        <div className='bk'>
        <nav>
            
            <ul >
                <li onMouseEnter={()=>setColor(white)} style={color}><NavLink className='my' to='/Home'>Home</NavLink></li>
                <li style={color}><NavLink className='my' to='/About'>About</NavLink></li>
                <li style={color}><NavLink className='my' to='/Contact'>Contact</NavLink></li>
            </ul>
           
        </nav>
        </div>
      )
    
}
