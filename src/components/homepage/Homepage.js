import React from 'react';
import Tagline from './Tagline';
import StepByStep from './StepByStep';
import ProgramCardSlider from '../program_card/ProgramCardSlider';
import PostScholarship from './PostScholarship';
import AthleteCardSlider from '../athlete_card/AthleteCardSlider';

const Homepage = (props) => {
  return (
    <div>
      <Tagline authenticated={props.authenticated} toggleRegisterForm={props.toggleRegisterForm} />
      <StepByStep />
      <ProgramCardSlider />
      <PostScholarship authenticated={props.authenticated} toggleLoginForm={props.toggleLoginForm}/>
      <AthleteCardSlider />
    </div>
  );
};

export default Homepage;