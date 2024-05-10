import { atom, useRecoilState } from 'recoil';
const ls = localStorage.getItem('isLoggedIn')
const us = localStorage.getItem('userId')
const ats = localStorage.getItem('accesstoken')
export const userIdState = atom({
    key: 'userIdState',
    default: us,
});

export const accesstokenState = atom({
    key: 'accesstoken',
    default: ats
});

export const loginState = atom({
    key: "login",
    default: ls
})