import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I'm a 4th year BSIT who likes to invest more time on improvements than doing social stuff. Right now I want to earn money on what I do best which is doing Illustration.</p>
      <div className="text-center">
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
};

export default About;
