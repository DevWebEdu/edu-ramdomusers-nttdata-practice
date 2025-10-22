import axios from "axios";

export const getUsers = async (page = 1 ) => {
    const url = `https://randomuser.me/api/?page=${page}&results=10`;
    const resp =  await axios.get(url);
    return resp.data.results;
}