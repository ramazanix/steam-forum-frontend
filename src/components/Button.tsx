import { ReactNode } from "react";
import { twJoin, twMerge } from "tailwind-merge";

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

type ButtonProps = {
  rounded?: keyof typeof Rounded;
  size?: keyof typeof Size;
  className?: string;
  onClick: () => void;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  rounded = "none",
  size = "md",
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={twMerge(
        twJoin(
          "bg-button inline-flex shrink-0 items-center justify-center whitespace-nowrap transition-colors transition-transform hover:scale-110 disabled:cursor-not-allowed",
          Rounded[rounded],
          Size[size],
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
