import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Nats Portfolio</h1>
      <p className="text-center">This is a portfolio about art.</p>
      <div className="text-center">
        <Link to="/about" className="btn btn-primary me-2">About Me</Link>
        <Link to="/projects" className="btn btn-primary me-2">Projects</Link>
        <Link to="/contact" className="btn btn-primary">Contact</Link>
      </div>
    </div>
  );
};

export default Home;
