import axios from 'axios';

const KEY = 'AIzaSyDxMVJ6B5_T6d-wYJK9McEGvO9TeYBDjLo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});