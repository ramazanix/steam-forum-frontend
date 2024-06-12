import { makeAutoObservable } from "mobx";
import { parseJwt } from "@/utils";

class UserStore {
  isLoading = false;
  isLoggedIn = false;
  steamId: string | null = null;
  personaName: string | null = null;
  profileUrl: string | null = null;
  avatar: string | null = null;
  avatarMedium: string | null = null;
  avatarFull: string | null = null;
  lastLogOf: number | null = null;
  timeCreated: number | null = null;
  locCountryCode: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  updateStore = (accessToken: string) => {
    this.isLoading = true;
    const decodedJWT = parseJwt(accessToken);
    this.steamId = decodedJWT.steamid;
    this.personaName = decodedJWT.personaname;
    this.profileUrl = decodedJWT.profileUrl;
    this.avatar = decodedJWT.avatar;
    this.avatarMedium = decodedJWT.avatarmedium;
    this.avatarFull = decodedJWT.avatarfull;
    this.lastLogOf = decodedJWT.lastlogof;
    this.timeCreated = decodedJWT.timecreated;
    this.locCountryCode = decodedJWT.loccountrycode;

    this.isLoggedIn = true;
    this.isLoading = false;
  };

  clearStore = () => {
    this.steamId = null;
    this.personaName = null;
    this.profileUrl = null;
    this.avatar = null;
    this.avatarMedium = null;
    this.avatarFull = null;
    this.lastLogOf = null;
    this.timeCreated = null;
    this.locCountryCode = null;
    this.isLoggedIn = false;
  };
}

export default UserStore;
