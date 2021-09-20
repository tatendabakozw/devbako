
const api_host = 'https://sandbox-healthservice.priaid.ch';
const lang = 'en-gb';
const format = 'json';

export const getSymptoms = (token) => {
    return fetch(`${api_host}/symptoms?language=${lang}&format=${format}&token=${token}`, {
        method: 'GET'
    }).then(res => res.json());
};