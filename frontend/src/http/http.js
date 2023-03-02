import { BASE_URL, BASE_URL_PRODUCT, BASE_URL_ORDER, BASE_URL_PRODUCT_END } from '../constants/BASE_URL'
import axios from 'axios'


export const http = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
        Accept: 'application/json',
        Content: 'application/json'
    }
})

export const funcTesteHttp = async () => {
    const getTeste = await http.get(`${BASE_URL_PRODUCT_END}/products`)
    console.log(getTeste);
}


