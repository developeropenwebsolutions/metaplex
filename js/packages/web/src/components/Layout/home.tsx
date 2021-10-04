import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'antd';
import { ConnectButton, CurrentUserBadge } from '@oyster/common';
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined } from '@ant-design/icons';
import { useMeta } from '../../contexts';
import { WalletButton } from "@oyster/common"

const { Header, Content } = Layout;

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
  

export const AppLayout = React.memo((props: any) => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  const { width } = useWindowDimensions();
  const { connected } = useWallet();
  const { publicKey } = useWallet();
  const { whitelistedCreatorsByCreator, store } = useMeta();
    const pubkey = publicKey?.toBase58() || '';
  
    const canCreate = useMemo(() => {
      return (
        store?.info?.public ||
        whitelistedCreatorsByCreator[pubkey]?.info?.activated
      );
    }, [pubkey, whitelistedCreatorsByCreator, store]);
    
  return (
    <>
    <div className="page-wrapper home-page partial-header-background">
         <img src={assetPrefix + "assets/images/dark-background-blue-tint.png"} alt="" className="page-background" />
         <header className="page-header">
            <nav className="top-navbar">
               <div className="nav-logo-wrapper">
                  <a href="#">
                     <img className="site-logo" src={assetPrefix + "assets/images/five-realms-logo.png"} alt="" />
                  </a>
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
                        <Link to={`#`} className="nav-link">
                          About
                        </Link>
                        <span className="nav-overlay two"></span>
                     </li>
                     {connected ? (
                     <li className="nav-item">
                        <Link to={`/art/create`} className="nav-link">
                          Mint
                        </Link>
                        <span className="nav-overlay three"></span>
                     </li>
                     ) : null}
                  </ul>
               </div>
               <div className="social-links-wrapper">
                    <Link to={`#`} className="social-link">
                     <img className="sl-img-back" src={assetPrefix + "assets/images/Twitter.png"} alt="" />
                     <img className="sl-img-front alt" src={assetPrefix + "assets/images/twitter-hover.png"} alt="" />
                     </Link>
                     <Link to={`#`} className="social-link">
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
                    {/* <UserActions /> */}
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
              {props.children}
         </main>
      </div>
    </>
  );
});
