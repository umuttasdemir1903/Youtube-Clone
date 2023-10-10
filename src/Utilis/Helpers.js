import axios from "axios";
const options = {

    params: { geo: 'US', lang: 'en' },
    headers: {
        'X-RapidAPI-Key': 'fcfe9735edmshba1ad90e4b33283p1d4c0cjsn33ae0f3bc4d6',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};
axios.defaults.baseURL='https://yt-api.p.rapidapi.com'
export const getData = async (url) => {
    try {
        const response = await axios.get(url, options);
        return response
    } catch (error) {
        console.log(error)
    }


}