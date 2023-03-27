import { SvgIcon } from "./SvgIcon";
import type { LinkButtonProps } from "./types";

export const IconButton = ({
  className,
  children,
  href,
  svgIcon,
  iconProps,
  alt,
}: LinkButtonProps) => {
  const justIcon = !children;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center rounded-md ${className} ${justIcon ? "!bg-transparent" : ""}`}
      style={{ height: iconProps?.height }}
    >
      {svgIcon ? <SvgIcon src={svgIcon} alt={alt} /> : null}
      {children ? <div className="flex items-center pr-4">{children}</div> : null}
    </a>
  );
};
