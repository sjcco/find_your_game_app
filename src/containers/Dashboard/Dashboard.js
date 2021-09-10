import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <Link to="/login">
      <button type="button">
        logout
      </button>
    </Link>
    <Link to="/game/pokemons">
      <h3>clickhere</h3>
    </Link>
  </>
);

export default Dashboard;
