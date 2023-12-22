import axios from "axios";
import i18next from "i18next";

export const fetchFeeds = (url) => {
  return axios.get(`https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`)
    .then((response) => response.data.contents)
    .catch((_) => Promise.reject(new Error(i18next.t("errors.network-error"))))
};