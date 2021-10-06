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
  
export const IndexView = () => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  const { connected } = useWallet();
  return (
    <div className="page-wrapper home-page partial-header-background">
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
            </nav>
         </header>
         <main className="page-contents">
        <Link to={`/element`} className="enter-realm-btn">Find your kin. Enter the realm.</Link>
        <button className="fr-form-btn" type="submit">Watch cinematic</button>
        </main>
      </div>
  );
};
