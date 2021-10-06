import React, { useMemo } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const MintView = () => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  const { connected } = useWallet();
  return (
      <div className="page-wrapper mint-page">
         <Header />
         <main className="page-contents">
           <section className="mint-contents">
           {connected ? (
               <div className="mint-btn-wrapper">
               
                   <Link to={`/art/create`}>
                        <button className="mint-btn">MINT</button>
                    </Link>
                  
                  <img src={assetPrefix + "assets/images/mint-frame.png"} alt="" className="mint-btn-overlay" />
                  <img src={assetPrefix + "assets/images/mint-frame-overlay.png"} alt="" className="mint-btn-overlay-front" />
               </div>
               ) : null}
               <h3 className="sub-title">1 sol</h3>
               <h3 className="mint-score">Minted 0/5000</h3>
            </section>
        </main>
        </div>
  );
};
