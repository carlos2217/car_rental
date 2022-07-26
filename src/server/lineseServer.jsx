import http from "./http";
import config from './config.json'

export function create(data) {
    return http.post(config.lineseEndPoint,data)
}
export function all() {
    return http.get(`${config.lineseEndPoint}/all`)
}
export function linseeWithUser() {
    return http.get(`${config.lineseEndPoint}/user`)
}
export function update(data) {
    return http.put(`${config.lineseEndPoint}/update`,data)
}