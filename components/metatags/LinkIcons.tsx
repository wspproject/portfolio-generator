import { LinkIcon } from "./types";

interface LinkIconsProps {
  icons: LinkIcon[];
  rel: string;
}

export const LinkIcons = ({ icons, rel }: LinkIconsProps) => {
  return (
    <>
      {icons.map(({ size, href }) => (
        <link key={`${size} ${href}`} rel={rel} sizes={size} href={href} />
      ))}
    </>
  );
};
