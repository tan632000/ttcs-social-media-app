export const userAction = Object.freeze({
    REGISTER: 'REGISTER',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILTE: 'REGISTER_FAILTE',

    GET_USER: 'GET_USER',
    GET_USER_SUCCESS: 'GET_USER_SUCCESS',
    GET_USER_FAILTE: 'GET_USER_FAILTE',
})


const registerUser = (params) => ({
    type: userAction.REGISTER,
    payload: params
})


const getUsers = () => ({
    type: userAction.GET_USER,
    payload: {}
})

export default {
    registerUser,
    getUsers
}