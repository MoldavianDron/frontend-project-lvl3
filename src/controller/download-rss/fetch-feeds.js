import axios from "axios";

export const fetchFeeds = (url) => {
  return axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`)
    .then((response) => response.data.contents)
    .catch((_) => Promise.reject(new Error("Ошибка сети")))
};