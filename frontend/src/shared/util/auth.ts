let accessTokenData = ""
let uidData = ""
let clientData = ""
let expiryData = ""

let storeJsonData = localStorage.getItem('vwork')
if (storeJsonData) {
  const storedData = JSON.parse(storeJsonData);
  accessTokenData = storedData.accessToken;
  uidData = storedData.uid;
  clientData = storedData.client;
  expiryData = storedData.expiry;
}

export const accessToken = accessTokenData
export const uid = uidData
export const client = clientData
export const expiry = expiryData
