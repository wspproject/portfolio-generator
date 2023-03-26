import type { OpenGraph } from "./types";

interface OpenGraphMetaProps {
  data: OpenGraph;
}

export const OpenGraphMeta = ({ data }: OpenGraphMetaProps) => {
  return (
    <>
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:url" content={data.url} />
      <meta property="og:image" content={data.image} />
      <meta property="og:type" content={data.type} />
      <meta property="og:locale" content={data.locale} />
    </>
  );
};
