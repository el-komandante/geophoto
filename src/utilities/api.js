import axios from 'axios'

const baseURL = 'http://192.168.0.100:8080'
const instance = axios.create({
    baseURL,
    timeout: 1000
})

export const uploadPhoto = async (lat, long, imageURL) => {
    const config = {
        method: 'post',
        url: '/images',
        data: {
            lat,
            long,
            imageurl: imageURL
        }
    }
    return instance(config)
}
