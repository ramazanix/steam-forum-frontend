export function parseJwt(token: string) {
  if (!token) {
    return;
  }
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}

export function unixTimeStampToDate(timestamp: number) {
  let date = new Date(timestamp * 1000);

  return date;
}
