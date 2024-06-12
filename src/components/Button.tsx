import { ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

enum BackgroundColor {
  first = "bg-first hover:bg-first/80",
  second = "bg-second hover:bg-second/80",
  third = "bg-third hover:bg-third/80",
  fourth = "bg-fourth hover:bg-fourth/80",
  fifth = "bg-fifth hover:bg-fifth/80",
}

enum Rounded {
  none = "rounded-none",
  rounded = "rounded",
  sm = "rounded-sm",
  md = "rounded-md",
  lg = "rounded-lg",
  xl = "rounded-xl",
  xxl = "rounded-2xl",
  full = "rounded-full",
}

enum Size {
  sm = "h-9 px-2",
  md = "h-10 px-3",
  xl = "h-11 px-4",
}

enum TextColor {
  inherit = "text-inherit",
  white = "text-white",
  black = "text-black",
}

type ButtonProps = {
  bg?: keyof typeof BackgroundColor;
  rounded?: keyof typeof Rounded;
  size?: keyof typeof Size;
  textColor?: keyof typeof TextColor;
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  bg = "first",
  rounded = "none",
  size = "md",
  textColor = "inherit",
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={twMerge(
        twJoin(
          "inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors disabled:cursor-not-allowed",
          BackgroundColor[bg],
          Rounded[rounded],
          Size[size],
          TextColor[textColor],
        ),
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
