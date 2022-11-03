import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `https://api.coingecko.com/api/v3/coins/`
})

export const coinApi = {
    getAllExchanges(page) {
        try {
            return axiosInstance.get(`markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`)
                .then(response => {
                    return response.data;
                })
        } catch (e) {
            console.log('error')
        }
    },
    getCoinDetail(id) {
        try {
            return axiosInstance.get(`${id}`)
                .then(response => {
                    return response.data;
                })
        } catch (e) {
            console.log('error')
        }
    }
}
