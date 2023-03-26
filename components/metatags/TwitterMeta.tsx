import type { Twitter } from "./types";

interface TwitterMetaProps {
  data: Twitter;
}

export const TwitterMeta = ({ data }: TwitterMetaProps) => {
  return (
    <>
      <meta name="twitter:card" content={data.card} />
      <meta name="twitter:url" content={data.url} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.image} />
    </>
  );
};
