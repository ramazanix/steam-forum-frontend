type Entries<T> = {
  [K in keyof T]: [key: K, value: T[K]];
}[keyof T][];

type UserData = {
  steamid: number;
  personaname: string;
  timecreated: number;
  lastlogoff: number;
  primaryclanid: number;
  locstatecode: number;
  loccityid: number;
  avatar: string;
  avatarmedium: string;
  avatarhash: string;
  personastate: number;
  loccountrycode: string;
  exp: number;
  profilestate: number;
  avatarfull: string;
};

type SteamItemDescription = {
  type: string;
  value: string;
  color: string;
};

type SteamItemTag = {
  category: string;
  internalName: string;
  localizedCategoryName: string;
  localizedTagName: string;
  color: string;
};

type SteamItemPriceInfo = {
  lowestPrice: string;
  medianPrice: string;
};

type SteamItem = {
  instanceid: string;
  currency: number;
  backgroundColor: string;
  iconUrl: string;
  iconUrlLarge: string;
  descriptions: Array<SteamItemDescription>;
  tradable: number;
  name: string;
  nameColor: string;
  type: string;
  marketName: string;
  marketHashName: string;
  tags: Array<SteamItemTag>;
  priceInfo: SteamItemPriceInfo | null;
};

type UserInventory = {
  appid: number;
  items: Array<SteamItem>;
};
