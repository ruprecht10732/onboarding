import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "`https://api.thecallcompany.nl/api/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
};
