import axios from 'axios';

function createHttp(access_token) {
    return axios.create({
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        // withCredentials: true,
    });
}

export default createHttp;