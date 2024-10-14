import axios from "axios";
const api = axios.create({
    baseURL: "https://petfilmapi.petoman.com/api/front"
})

export default api