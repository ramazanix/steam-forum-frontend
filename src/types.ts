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
