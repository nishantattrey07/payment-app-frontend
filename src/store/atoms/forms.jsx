import { atom } from 'recoil';

export const FirstName = atom({
    key: 'FirstName',
    default: '',
})

export const LastName = atom({
    key: 'LastName',
    default: '',
})

export const Email = atom({
    key: 'Email',
    default: '',
})

export const Password = atom({
    key: 'Password',
    default: '',
})