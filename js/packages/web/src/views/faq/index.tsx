import React from 'react';

export const FaqView = () => {
  const assetPrefix = process.env.ASSET_PREFIX || '';
  return (
    <section class="faq-contents">
        <p class="faq-question">How do I participate in the presale ?</p>
        <p class="faq-answer">
            Join Discord. Follow on Twitter, Share. Community support loudly echoes the heartbeat of Five Realms.
            In light of that, 1,500 members of the discord army, shall be granted access to the presale. 1:1
            Ratio. No shilling. You deserve more.
        </p>

        <p class="faq-question">How do I participate in the public sale ?</p>
        <p class="faq-answer">
            Head to the ‘Mint’ page. Connect your Wallet. Keep your trigger finger ready for launch when public
            sale is live.
        </p>

        <p class="faq-question">Which wallet can I use ?</p>
        <p class="faq-answer">We support Phantom Wallet.</p>

        <p class="faq-question">Is there a resale market ?</p>
        <p class="faq-answer">SolSea, Digitalise and SolanArt</p>

        <p class="faq-question">What’re some incentives for the community ?</p>
        <div class="faq-answer-list-wrapper pos-relative">
            <ul class="faq-answer-list">
                <li class="list-item">
                PreSale: 30 % Minted – 10 Airdrops to randomly selected addresses that participated in the
                presale
                </li>
                <li class="list-item">HUGE giveaways to members of our discord and twitter community</li>
                <li class="list-item">50% Minted - 50 SOL added to community wallet.</li>
                <li class="list-item">75% Minted - 75 SOL added to community wallet</li>
                <li class="list-item">5% Royalties pooled back to community wallet each month.</li>
                <li class="list-item">Limited edition Comic Book for the legion</li>
                <li class="list-item">Exclusive Merch for the Five Realms army</li>
                <li class="list-item">
                SECOND COLLECTION: Prepare for battle, and climb through the ranks with the greatest sequel of
                all time.
                </li>
                <li class="list-item">NFT GAME: <br />Enter the realm, and bring order to the metaverse</li>
            </ul>
            <img src={assetPrefix + "assets/images/faq-img.png"} alt="" className="faq-img" />
        </div>
    </section>
  );
};
