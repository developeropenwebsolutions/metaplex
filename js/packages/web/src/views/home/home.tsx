import React from 'react';
import { Link } from 'react-router-dom';

export const IndexView = () => {
  return (
    <div>
        <Link to={`#`} className="enter-realm-btn">Find your kin. Enter the realm.</Link>
        <button className="fr-form-btn" type="submit">Watch cinematic</button>
    </div>
  );
};
