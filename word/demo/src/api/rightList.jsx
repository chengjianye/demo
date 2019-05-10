import axios from 'axios';

export function getRightList(id) {
    return axios.get('/getRightList', {
        params: { id: id }
    })
}