import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
  
export const IndexView = () => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  return (
    <div className="page-wrapper home-page partial-header-background">
         <img src={assetPrefix + "assets/images/dark-background-blue-tint.png"} alt="" className="page-background" />
         <Header />
         <main className="page-contents">
        <Link to={`/element`} className="enter-realm-btn">Find your kin. Enter the realm.</Link>
        <button className="fr-form-btn" type="submit">Watch cinematic</button>
        </main>
      </div>
  );
};
