import React from 'react'
import { API } from '../api/api/API';
import { getStorage } from '../storage/LocalStorage'

const InitAPI = async () => {
    const tempToken = await getStorage('TOKEN');
    
    if (tempToken) {
        console.log('Init Token: ', tempToken);
        API.defaults.headers['Authorization'] =
            `Bearer ${tempToken}`;
    }
    API.defaults.headers.lang = 'ru';

}

export default InitAPI
