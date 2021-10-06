import React, { useMemo } from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import useWindowDimensions from '../../utils/layout';
import { useMeta } from '../../contexts';
import { WalletButton } from "@oyster/common"

const UserActions = () => {
    const { publicKey } = useWallet();
    const { whitelistedCreatorsByCreator, store } = useMeta();
    const pubkey = publicKey?.toBase58() || '';
    const { connected } = useWallet();
    const canCreate = useMemo(() => {
      return (
        store?.info?.public ||
        whitelistedCreatorsByCreator[pubkey]?.info?.activated
      );
    }, [pubkey, whitelistedCreatorsByCreator, store]);
  
    return (
      <>
        {store && (
          <>
            {/* <Link to={`#`}>
              <Button className="app-btn">Bids</Button>
            </Link> */}
            {connected ? (
              <Link to={`/art/create`}>
                <Button className="app-btn">Create</Button>
              </Link>
            ) : null}
            <Link to={`/auction/create/0`}>
              <Button className="connector" type="primary">
                Sell
              </Button>
            </Link>
          </>
        )}
      </>
    );
  };

export const FaqView = () => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  const { connected } = useWallet();
  return (
      <div className="page-wrapper faq-page">
         <img src={assetPrefix + "assets/images/dark-background-blue-tint.png"} alt="" className="page-background" />
         <header className="page-header">
            <nav className="top-navbar">
               <div className="nav-logo-wrapper">
                  <Link to={`/`}>
                     <img className="site-logo" src={assetPrefix + "assets/images/five-realms-logo.png"} alt="" />
                  </Link>
               </div>
               <div className="nav-menu-wrapper">
                  <ul className="nav-menu">
                     <li className="nav-item">
                        <Link to={`/`} className="nav-link">
                          Home
                        </Link>
                        <span className="nav-overlay one"></span>
                     </li>
                     <li className="nav-item">
                        <Link to={`/about`} className="nav-link">
                          About
                        </Link>
                        <span className="nav-overlay two"></span>
                     </li>
                     <li className="nav-item">
                        <Link to={`/mint`} className="nav-link">
                          Mint
                        </Link>
                        <span className="nav-overlay three"></span>
                     </li>
                  </ul>
               </div>
               <div className="social-links-wrapper">
                    <Link to={`#`} className="social-link twitter">
                     <img className="sl-img-back" src={assetPrefix + "assets/images/Twitter.png"} alt="" />
                     <img className="sl-img-front" src={assetPrefix + "assets/images/twitter-hover.png"} alt="" />
                     </Link>
                     <Link to={`#`} className="social-link discord">
                     <img className="sl-img-back" src={assetPrefix + "assets/images/DISCORD.png"} alt="" />
                     <img className="sl-img-front" src={assetPrefix + "assets/images/Discord-hover.png"} alt="" />
                     </Link>
                    <Link to={`#`} className="social-link">
                     <img className="sl-img-back" src={assetPrefix + "assets/images/Solsea.png"} alt="" />
                     <img className="sl-img-front" src={assetPrefix + "assets/images/Solsea-hover.png"} alt="" />
                     </Link>
               </div>
               <div className="wallet-button-wrapper">
               {connected ? (
                    <div className="app-right app-bar-box">
                    <UserActions />
                    <CurrentUserBadge
                        showBalance={false}
                        showAddress={false}
                        iconSize={24}
                    />
                    </div>
                ) : (
               <WalletButton className="connect-wallet-btn" allowWalletChange>Connect wallet</WalletButton>
               )}
               </div>
            </nav>
         </header>
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
