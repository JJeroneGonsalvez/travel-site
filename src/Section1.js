import React from 'react'
import './Section1.css'
import m1 from './im1.jpg'
import m2 from './im2.jpg'
export default function() {
  return (
    <section>
    <div class='aling'>
      <div class='pd'>
        <span class='cl'>ABOUT US</span>
        <h1> Explore All Corners of The World With Us</h1>
        <p class='po'>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
    <p class='ps'>
    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
    </p>
    <a href='#'><button>Read more</button></a>
      </div>
      <div class='row1'>
        <div class= 'im1 im-col'>
          <img src={m1} alt='image' class='im-flu1'></img>
        </div>
        <div class='im2 im-col'>
          <img src={m2} alt='image' class='im-flu2'></img>
        </div>

      </div> 
    </div>
    </section>
  )
}
