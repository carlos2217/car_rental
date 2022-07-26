import http from './http'
import config from './config.json'

export function create(data) {
    return http.post(config.carEndPoint,data)
}
export function allCars() {
    return http.get(`${config.carEndPoint}/all`)
}
export function getOneCar(id) {
    return http.get(`${config.carEndPoint}/${id}`)
}
export function update(id,data) {
    return http.put(`${config.carEndPoint}/${id}`,data)
}
export function deleteCar(id) {
    return http.delete(`${config.carEndPoint}/${id}`)
}
export function availableCars() {
    return http.get(`${config.carEndPoint}/availableCars`)
}
export function search(key) {
    return http.get(`${config.carEndPoint}/search/${key}`)
}
export function myCar() {
    return http.get(`${config.carEndPoint}/mycar`)
}