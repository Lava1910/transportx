import axios from "axios";

const LOCALTION_URL = "https://provinces.open-api.vn/api/?depth=3";
const location_api = axios.create({
    localtionURL:LOCALTION_URL
});

export default location_api;