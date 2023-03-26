import { useEffect, useState } from "react";
import { IconButton } from "./IconButton";
import { useTheme } from "next-themes";
import globalThemes from "../../portfolio.config.json";
import config from "./config.json";
import type { HeroButtonsConfig } from "./types";

const { buttonsData, iconProps }: HeroButtonsConfig = config;

export const HeroButtons = () => {
  const [mounted, setMounted] = useState(false);
  const actTheme = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-4">
      {buttonsData?.map(({ href, content, svgIcon, svgIconDark, alt }) => (
        <IconButton
          key={`${content}--${href}`}
          href={href}
          className={globalThemes.theme.buttons}
          svgIcon={actTheme.resolvedTheme === "dark" ? svgIconDark : svgIcon}
          iconProps={iconProps}
          alt={alt}
        >
          {content?.length && content}
        </IconButton>
      ))}
    </div>
  );
};

export default HeroButtons;
