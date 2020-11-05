  
import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Trainer of the Day</h1>
      <p>Jessie Kelley</p>
      <FeatureButton>Train now!</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;