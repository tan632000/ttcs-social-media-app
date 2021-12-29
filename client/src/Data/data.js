import axios  from "axios"

const API_FAKE = 'https://61ae0653a7c7f3001786f575.mockapi.io'
const getUser = () => {
    return axios.get(`${API_FAKE}/Account`).then(result => {
        if (result.status === 200) {
           console.log('success');
            return result.data
        }
    }).catch()
}

const addUser = (params) => {
    return axios.post(`${API_FAKE}/Account`, params).then(result => {
        console.log(result);
    })
}

export const userApi = {
    getUser,
    addUser
}