import React from 'react'
import Navbar from '../components/Navbar'
import {HeroContainer} from './HeroElements'

const Hero = () => {
    return (
  <HeroContainer>
      <Navbar />
      <HeroContent>
          <HeroItems>
              <HeroH1>Workouts for All</HeroH1>
              <HeroP>Get your workout on</HeroP>
              <HeroBtn>Find Trainer</HeroBtn>
          </HeroItems>
      </HeroContent>
  </HeroContainer>
    )
}

export default Hero
