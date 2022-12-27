import axios from "axios";
import { GetStaticProps } from 'next';
import { Spotify } from "../../interfaces";

const BASE_URL = 'https://sp2.servidorrprivado.com/';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const spotyAPI = axios.create({
  baseURL: 'https://api.spotify.com/v1',
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

 const dataFromSpotify: GetStaticProps = async () => {
    try {
      const { data } = await spotyAPI.get<Spotify>("/playlists/37i9dQZEVXbO3qyFxbkOE1",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer BQDNleK4H4nhggK85PgXz6hDy1uL0-BXxaj3acXJ8PikJCtGtVqkg2v5RB7xeFt8bEwWHfdrydIDSOpk0Ikujq43pYygvoRUsiiDdq2rIN74ieQNEw_sOmlSqj23XAPaDETH4-Aoid2cDoOcxAFDqJ-egPhIBDxfX4xc55rqHnuAX_k",
        },
      }
      );
      return {
        props: {
          trackname: data.name,
          list: data.tracks.items,
          artist: data.tracks,
        }
      }
    } catch (error) {
      throw new Error
    }
  }

  export {
    dataFromSource,
    dataFromSpotify,
  }