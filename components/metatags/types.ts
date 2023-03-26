export interface LinkIcon {
  size: string;
  href: string;
}

export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
}

export interface MetaData {
  title: string;
  description: string;
  url: string;
  image: string;
}

export interface OpenGraph extends MetaData {
  type: string;
  locale: string;
}

export interface Twitter extends MetaData {
  card: string;
}

export interface Metatags {
  favicon: string;
  title: string;
  viewport: string;
  charSet: string;
  author: string;
  copyright: string;
  robots: string;
  keywords: string;
  description: string;
  ogData: OpenGraph;
  twitterData: Twitter;
  msapplicationTileColor: string;
  themeColor: string;
  appleTouchIcons: LinkIcon[];
  androidIcons: LinkIcon[];
  manifest: string;
  msApplicationTileImage: string;
}

export enum LinkIconRel {
  APPLE_TOUCH_ICON = "apple-touch-icon",
  ICON = "icon",
  SHORTCUT_ICON = "shortcut icon",
  MASK_ICON = "mask-icon",
  PRECONNECT = "preconnect",
  PRELOAD = "preload",
  PRERENDER = "prerender",
  PREFETCH = "prefetch",
  DNS_PREFETCH = "dns-prefetch",
  MODULE_PRELOAD = "modulepreload",
}
