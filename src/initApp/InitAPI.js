import React from 'react'
import { API } from '../api/api/API';
import { getStorage } from '../storage/LocalStorage'

const InitAPI = async () => {
    const tempToken = await getStorage(TOKEN);

    if (tempToken) {
        API.defaults.headers.common[REQUEST_HEDERS.AUTHORIZATION] =
            `Bearer ${tempToken}`;
    }
}

export default InitAPI
