import axios from 'axios';

export default axios.create ({
    baseURL: "http://localhost:8080"
});

//By setting a base URL, we can reuse the same base part of the URL for all your API calls,
//and only append the specific endpoint when making the actual request.