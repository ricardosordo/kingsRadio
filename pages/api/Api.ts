import axios from "axios";

const BASE_URL = 'https://sp2.servidorrprivado.com/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const dataFromSource = async () => {
    try {
      const response: any = await instance.get('cp/get_info.php?p=8298');
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }

const dataFromSpotify = async () => {
    try {
      const response: any = await axios.get("https://api.spotify.com/v1/playlists/37i9dQZEVXbO3qyFxbkOE1?limit=10",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer BQDH7sCs2v5Mx7MFNXW_IL_DOn2-2gU-j6VKo0Z1LUvD9Rp54E9GsJzU8dmmCurXkHB786uDFsCrnlBbaVwoAKzJqM8Xl3_psr6QNSUWoUac6JSzzgbmvPPmjY7i1vABTdMprHqiN-g8ZJyp8gDpnksIDhPKyxH8VcT45CJz_qyoFvQ",
        },
      }
      );
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }

  export {
    dataFromSource,
    dataFromSpotify,
  }