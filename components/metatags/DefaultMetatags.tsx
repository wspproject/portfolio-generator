//Favicons generated via:
//https://www.favicon-generator.org/

import config from "../../metadata-config.json";
import { LinkIcons } from "./LinkIcons";
import { OpenGraphMeta } from "./OpenGraphMeta";
import { TwitterMeta } from "./TwitterMeta";
import { Metatags, LinkIconRel } from "./types";

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
  ogData,
  twitterData,
  msapplicationTileColor,
  themeColor,
  appleTouchIcons,
  androidIcons,
  manifest,
  msApplicationTileImage,
}: Metatags = config;

export const DefaultMetatags = () => {
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
      <meta name="msapplication-TileColor" content={msapplicationTileColor} />
      <meta name="theme-color" content={themeColor} />
      <link rel="manifest" href={manifest} />
      <meta name="msapplication-TileImage" content={msApplicationTileImage} />

      <TwitterMeta data={twitterData} />
      <OpenGraphMeta data={ogData} />

      <LinkIcons rel={LinkIconRel.APPLE_TOUCH_ICON} icons={appleTouchIcons} />
      <LinkIcons rel={LinkIconRel.ICON} icons={androidIcons} />
    </>
  );
};
