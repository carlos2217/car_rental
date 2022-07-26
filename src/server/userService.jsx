import http from './http'
import config from './config.json'

export function register(data) {
    return http.post(config.userEndPoint,data)    
}

export function login(data) {
    return http.post(`${config.userEndPoint}/login`,data)    
}

export function oneUser(data) {
    return http.get(`${config.userEndPoint}/${data}`)    
}

export function me() {
    return http.get(`${config.userEndPoint}/profile`)    
}

export function update(id,data) {
    return http.put(`${config.userEndPoint}/${id}`,data)    
}

