ort { request } from 'axios';

const options = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search',
    params: {plrN: 'Tucker'},
    headers: {
        'X-RapidAPI-Key': 'ab08cab45bmsh4a956d7f905ca08p1200c7jsn438f9751a0c3',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
};

async function getPlayer() {
    try {
        const response = await request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);