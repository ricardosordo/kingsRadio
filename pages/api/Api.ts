import axios from "axios";
import { env } from "process";
import { Spotify } from "../../interfaces";

const MUSIC_API = process.env.NEXT_PUBLIC_RAPID

const instance = axios.create({
  baseURL: 'https://sp2.servidorrprivado.com/',
  timeout: 10000,
});

const spotyAPI = axios.create({
  baseURL: 'https://spotify81.p.rapidapi.com',
  timeout: 10000,
});


const dataFromSpotify = async () => {
  try {
    const { data } = await spotyAPI.get<Spotify>("/playlist",
    {
    params: {id: '37i9dQZEVXbO3qyFxbkOE1'},
    headers: {
      'X-RapidAPI-Key': `${MUSIC_API}` ,
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