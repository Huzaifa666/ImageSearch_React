import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID BODQQ8o9cAjwYFD3lqzxXQQGacX59HOYVXeGOPM0lDI'
    }
})