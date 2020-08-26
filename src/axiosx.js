import axios from 'axios';

const lyrics = axios.create({
    baseURL: 'https://api.lyrics.ovh/v1/',
});


const theAudiodb = axios.create({
    baseURL: 'https://www.theaudiodb.com/api/v1/json/',
});
