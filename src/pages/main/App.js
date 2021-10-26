import React from 'react';
import './AppStyle.scss';
import Tilt from 'react-parallax-tilt';

const App = () => {
  //-->  tilt settings for the sections
  const options = {
    tiltMaxAngleX: 15,
    tiltMaxAngleY: 15,
    perspective: 600,
    transitionSpeed: 1500,
    scale: 1.05,
    gyroscope: false,
  };
  return (
    <main>
      {/* ----- section one ----- */}
      <Tilt className='section__one' {...options}>
        {/* ----- tablediv ----- */}
        <span className='section__one--back-div' />
        <span className='section__one--top-div' />

        {/* ----- logo banner ----- */}
      </Tilt>

      {/* ----- section two ----- */}
      <Tilt className='section__two' {...options}>
        {/* ----- table one ----- */}
        <span className='section__two--top-table' />
        {/* ----- table two ----- */}
        <span className='section__two--bottom-table' />
        {/* ----- center logo bannner ----- */}
        <span className='section__two--logo' />
      </Tilt>

      <h3 className='signature__text'>🌹oddFEELING</h3>
    </main>
  );
};

export default App;
