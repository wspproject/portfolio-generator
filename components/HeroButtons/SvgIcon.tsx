import Image from "next/image";
import type { SvgIconProps } from "./types";

export const SvgIcon = ({ src, alt, width = 40, height = 40 }: SvgIconProps) => {
  return src ? (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      className={`inline-block h-[${height}px]`}
    />
  ) : null;
};
