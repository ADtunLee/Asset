import axios from 'axios';
import * as Config from '../Constants/Config';

export default function APICaller(endpoint, method = 'GET', body){
    // body.key , body.limit
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
};