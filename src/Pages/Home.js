
import React from 'react'
import Navigation from '../Components/Navigation'
import About from '../Layout/About'
import Feature from '../Layout/Feature'
import Header from '../Layout/Header'
import LogoShow from '../Layout/LogoShow'

const Home = () => {
    return (
        <section className='home'>
    <Navigation /> 
     <Header />
        <LogoShow />
        <About />
        
        <Feature />
        </section>  
    )
}

export default Home
