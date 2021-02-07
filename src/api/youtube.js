import axios from 'axios';
const KEY = 'AIzaSyDrlj7a3sFlXBAjo212z7-IcERQm8C53-c';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});