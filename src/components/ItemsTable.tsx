import { twJoin, twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className: string;
};

export const ItemsTable: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "mb-8 overflow-hidden rounded-3xl bg-inventory",
        className,
      )}
    >
      <div className="mb-5 grid h-[80dvh] grid-cols-8 content-start justify-items-center gap-3 overflow-y-auto p-10">
        {children}
      </div>
    </div>
  );
};
