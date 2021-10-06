import React from 'react';
import { Header } from '../../components/Header';

export const ElementView = () => {
    const assetPrefix = process.env.ASSET_PREFIX || '';
  return (
    <div className="page-wrapper second-page">
    <img src={assetPrefix + "assets/images/realms-background-all-together.png"} alt="" className="page-background" />
    <Header />
      <main className="page-contents">
        <section className="text-section">
            <p className="fr-text">A unique collection of 5000 animated nfts.</p>
            <p  className="fr-text">split into 5 elemental realms.</p>
            <p  className="fr-text">1000 per army.</p>
        </section>
      </main>
    </div>
  );
};
