import axios from "axios";
import { env } from "process";
import { GetStaticProps } from 'next';
import { Spotify } from "../../interfaces";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL_BROADCAST
const CLIENT_ID = process.env.NEXT_PUBLIC_API
const BASE_API = process.env.NEXT_PUBLIC_LINK

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const spotyAPI = axios.create({
  baseURL: BASE_API,
  timeout: 10000,
});


const dataFromSpotify = async () => {
  try {
    const { data } = await spotyAPI.get<Spotify>("/playlist",
    {
    params: {id: '37i9dQZEVXbO3qyFxbkOE1'},
    headers: {
      'X-RapidAPI-Key': CLIENT_ID,
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