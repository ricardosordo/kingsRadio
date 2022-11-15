import axios from "axios";

const BASE_URL = 'https://sp2.servidorrprivado.com/cp/get_info.php?p=8298';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const dataFromSource = async () => {
    try {
      const response: any = await instance.get(BASE_URL);
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }

  export {
    dataFromSource
  }