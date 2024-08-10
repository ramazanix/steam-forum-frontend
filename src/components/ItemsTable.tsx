import { twJoin } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className: string;
};

export const ItemsTable: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl bg-inventory">
      <div
        className={twJoin(
          "grid max-h-[80dvh] grid-cols-10 justify-items-center gap-3 overflow-y-auto p-10",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
