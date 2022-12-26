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
          Authorization: "Bearer BQDik5U4gy6PoWaYhvZ7cOMFDp-qkAZCorR6utTdyxprkDtHIAgWleRtk-IBCP47KoyRYD1ajZn3298YUJd1ucj1xp_AsuowniAc6stAGAqKIdLb4uMgGpYCQCXN077HOOdp6YiTQocKCi9MXnDXqAv3IQSNBnC--AWVNasCBeYAxaY",
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