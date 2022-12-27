import axios from "axios";
import { GetStaticProps } from 'next';
import { Spotify } from "../../interfaces";

const BASE_URL = process.env.URL_BROADCAST

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const spotyAPI = axios.create({
  baseURL: 'https://spotify81.p.rapidapi.com',
  timeout: 10000,
});


const dataFromSpotify: GetStaticProps = async () => {
  try {
    const { data } = await spotyAPI.get<Spotify>("/playlist",
    {
    params: {id: '37i9dQZEVXbO3qyFxbkOE1'},
    headers: {
      'X-RapidAPI-Key': '2ed0e28c43msh513b68b7ba87df0p1582a3jsnecd1045e0f3d',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
    }
    });
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


const dataFromSource = async () => {
    try {
      const response: any = await instance.get('cp/get_info.php?p=8298');
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }


  export {
    dataFromSource,
    dataFromSpotify,
  }