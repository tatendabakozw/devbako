
const CryptoJS = require("crypto-js");
const auth_host = 'https://sandbox-authservice.priaid.ch';

const user_id = 'dambakudzai@gmail.com';
const password = 'Ae56Qxa2CSw89HfLc';


export const getToken = () => {
  const computedHash = CryptoJS.HmacMD5(`${auth_host}/login`, password);
  const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

  return fetch(`${auth_host}/login`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${user_id}:${computedHashString}`
    }
  }).then(res => res.json());
};