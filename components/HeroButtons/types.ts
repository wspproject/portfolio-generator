import { ReactNode } from "react";

export interface ButtonData {
  href: string;
  content?: string;
  svgIcon: string;
  svgIconDark: string;
  alt: string;
}

export interface HeroButtonsConfig {
  iconProps: {
    height: number;
  };
  buttonsData: ButtonData[];
}

export interface LinkButtonProps {
  className: string;
  children: ReactNode;
  href: string;
  svgIcon?: string;
  iconProps: { height: number };
  alt: string;
}

export interface SvgIconProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}
