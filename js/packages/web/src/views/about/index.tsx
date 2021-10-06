import React from 'react';
import { Header } from '../../components/Header';

export const AboutView = () => {
  return (
    <div className="page-wrapper about-page">
         <Header />
         <main className="page-contents">
            <header className="page-title-wrapper">
                <h1 className="page-title">About</h1>
            </header>
            <section className="about-text-wrapper">
                <p className="about-paragraph">
                    Five Realms is a highly anticipated project with a unique collection of 5000 non-fungible tokens
                    (NFTs) non-sequentially minted, stored on the Solana blockchain,
                </p>
                <p className="about-paragraph">
                    Created by rogue artists all over the world from gaming and fantasy communities who united under one
                    sole purpose, to vivify their vision into art and enter the metaverse.
                </p>
                <p className="about-paragraph last-paragraph">
                    From the community,
                    <br />For the community.
                </p>
                <p className="hastag-text">#FiveRealmsLegion</p>
            </section>
    </main>
      </div>
  );
};
