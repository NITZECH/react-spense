import React from 'react'
import Phone from '../Assets/Phone Mockup.png'
const About = () => {
    return (
       <section className="about">
           <div className="about__info">
<h2 className="about__info--header">
    Secure your money with Escrow.
</h2>
<p className="about__info--description">
    Spense uses Escrow to secure all payments. We believe Escrow offers the highest level of security for your payments so you never need to worry about scams.

</p>
<button> Learn more about Escrow</button>
           </div>
           <div className="about__image">
               <img src={Phone} alt="Phone" />
           </div>
       </section>
    )
}

export default About
