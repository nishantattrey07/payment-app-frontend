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