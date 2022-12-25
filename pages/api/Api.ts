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
      const response: any = await axios.get("https://api.spotify.com/v1/playlists/37i9dQZF1DX5BAPG29mHS8?market=MX",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer BQDZD_mDd2pToWG9OxurHxS9ZQZ6G_L-vAKeNSoybquSicuYTi9qaQ78V89lhHlerrLAFaprEX5_-3p1abNMDX_-fD-5cybUnZdzp6c3NJokDyGz1WmKW-veZ5x5M6O-Eh-b44KMevu-o-qk1XYz9llJ55zkXg_A6FSzTGFoqTcEr6s",
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