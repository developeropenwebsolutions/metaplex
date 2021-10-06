import React from 'react';
import { Header } from '../../components/Header';

export const FaqView = () => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  return (
      <div className="page-wrapper faq-page">
         <img src={assetPrefix + "assets/images/dark-background-blue-tint.png"} alt="" className="page-background" />
         <Header />
         <main className="page-contents">
          <section className="faq-contents">
              <p className="faq-question">How do I participate in the presale ?</p>
              <p className="faq-answer">
                  Join Discord. Follow on Twitter, Share. Community support loudly echoes the heartbeat of Five Realms.
                  In light of that, 1,500 members of the discord army, shall be granted access to the presale. 1:1
                  Ratio. No shilling. You deserve more.
              </p>

              <p className="faq-question">How do I participate in the public sale ?</p>
              <p className="faq-answer">
                  Head to the ‘Mint’ page. Connect your Wallet. Keep your trigger finger ready for launch when public
                  sale is live.
              </p>

              <p className="faq-question">Which wallet can I use ?</p>
              <p className="faq-answer">We support Phantom Wallet.</p>

              <p className="faq-question">Is there a resale market ?</p>
              <p className="faq-answer">SolSea, Digitalise and SolanArt</p>

              <p className="faq-question">What’re some incentives for the community ?</p>
              <div className="faq-answer-list-wrapper pos-relative">
                  <ul className="faq-answer-list">
                      <li className="list-item">
                      PreSale: 30 % Minted – 10 Airdrops to randomly selected addresses that participated in the
                      presale
                      </li>
                      <li className="list-item">HUGE giveaways to members of our discord and twitter community</li>
                      <li className="list-item">50% Minted - 50 SOL added to community wallet.</li>
                      <li className="list-item">75% Minted - 75 SOL added to community wallet</li>
                      <li className="list-item">5% Royalties pooled back to community wallet each month.</li>
                      <li className="list-item">Limited edition Comic Book for the legion</li>
                      <li className="list-item">Exclusive Merch for the Five Realms army</li>
                      <li className="list-item">
                      SECOND COLLECTION: Prepare for battle, and climb through the ranks with the greatest sequel of
                      all time.
                      </li>
                      <li className="list-item">NFT GAME: <br />Enter the realm, and bring order to the metaverse</li>
                  </ul>
                  <img src={assetPrefix + "assets/images/faq-img.png"} alt="" className="faq-img" />
              </div>
          </section>
          </main>
      </div>
  );
};
