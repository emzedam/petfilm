import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:8000/api/front"
})

api.interceptors.response.use(
    response => response,
    error => {
        // console.error('API Error:', error);
        return Promise.reject({ message: 'An error occurred, please try again later.' });
    }
);

export default api