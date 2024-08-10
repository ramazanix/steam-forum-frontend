import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  rarityColor: string;
};

export const ItemImage: React.FC<Props> = ({ src, alt, rarityColor }) => {
  return (
    <button
      className="h-36 w-36 content-center border-2"
      style={{ borderColor: `#${rarityColor}` }}
    >
      <Image
        src={`https://steamcommunity-a.akamaihd.net/economy/image/${src}`}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full"
      />
    </button>
  );
};
