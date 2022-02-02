import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "958f0911f0msh3f8d3362c603605p13d0e1jsn3a86f86fbf63",
    },
  });
  return data;
};
