import React from 'react'
import Navbar from '../../components/Navbar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    return (
  <HeroContainer>
      <Navbar />
      <HeroContent>
          <HeroItems>
              <HeroH1>Shape-shift your Workouts</HeroH1>
              <HeroP>Train with a Pro</HeroP>
              <HeroBtn>Find Trainer</HeroBtn>
          </HeroItems>
      </HeroContent>
  </HeroContainer>
    )
}

export default Hero
