import axios from "axios";
import { baseUrl } from "./Constants/Constants";
const instanse = axios.create({
  baseURL: baseUrl,
});
export default instanse;