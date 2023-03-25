//Favicons generated via:
//https://www.favicon-generator.org/

import config from "./config.json";
import { LinkIcons } from "./LinkIcons";
import { LinkIcon } from "./types";

export const DefaultMetatags = () => {
  const {
    favicon,
    title,
    viewport,
    charSet,
    author,
    copyright,
    robots,
    keywords,
    description,
    ogtitle,
    ogdescription,
    ogurl,
    ogimage,
    ogtype,
    twittercard,
    twitterurl,
    twittertitle,
    twitterdescription,
    twitterimage,
    msapplicationTileColor,
    themeColor,
    oglocale,
    appleTouchIcons,
    androidIcons,
    manifest,
    msApplicationTileImage,
  } = config;

  return (
    <>
      <title>{title}</title>
      <link rel="icon" href={favicon} />

      <meta name="viewport" content={viewport} />
      <meta charSet={charSet} />
      <meta name="author" content={author} />
      <meta name="copyright" content={copyright} />
      <meta name="robots" content={robots} />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={ogtitle} />
      <meta property="og:description" content={ogdescription} />
      <meta property="og:url" content={ogurl} />
      <meta property="og:image" content={ogimage} />
      <meta property="og:type" content={ogtype} />
      <meta name="twitter:card" content={twittercard} />
      <meta name="twitter:url" content={twitterurl} />
      <meta name="twitter:title" content={twittertitle} />
      <meta name="twitter:description" content={twitterdescription} />
      <meta name="twitter:image" content={twitterimage} />
      <meta name="msapplication-TileColor" content={msapplicationTileColor} />
      <meta name="theme-color" content={themeColor} />
      <meta property="og:locale" content={oglocale} />

      <link rel="manifest" href={manifest} />
      <meta name="msapplication-TileImage" content={msApplicationTileImage} />

      <LinkIcons rel={"apple-touch-icon"} icons={appleTouchIcons as LinkIcon[]} />
      <LinkIcons rel={"icon"} icons={androidIcons as LinkIcon[]} />
    </>
  );
};
