import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyC6yGelkLiRZRRyPUX1gKUejBXgZyasdcg",
    cx: "e2ad4141b004c4495",
};
export const fetchDataFromApi= async(payload)=>{
const {data} = await axios.get(BASE_URL,{
    params:{...params, ...payload }
})
return data;
};


