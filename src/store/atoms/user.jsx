import { atom } from "recoil";

export const UserProfile = atom({
    key: 'UserProfile',
    default: {
        _id: '',
        firstName: '',
        lastName: '',
        password: ''
    }
})

export const UserBalance = atom({
    key: 'UserBalance',
    default: 0
})


export const sendToUserFullName = atom({
    key: 'sendToUserFullName',
    default: ''
})

export const toUsername = atom({
    key: 'toUsername',
    default: ''
})

export const token = atom({

    key: 'token',
    default: ''
})