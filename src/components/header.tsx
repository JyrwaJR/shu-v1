import { siteDescription, siteTitle, siteUrl } from '@src/config';
import React from 'react';

const Header = () => {
  const imageUrl = `${siteUrl}/seo/og.png`;
  return (
    <React.Fragment>
      <title>Shuker Jyrwa</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={siteUrl} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={siteUrl} />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="robots" content="noindex,nofollow" />
    </React.Fragment>
  );
};

export default Header;
