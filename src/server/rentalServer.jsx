import http from './http'
import config from './config.json'


export function create(data,user,car) {
    return http.post(`${config.rentalEndPoint}/${user}/${car}`,data)
}
export function ReturnCars() {
    return http.get(`${config.rentalEndPoint}/return`)
}
export function ReturnCount() {
    return http.get(`${config.rentalEndPoint}/count`)
}
export function Retured(rental,car) {
    return http.put(`${config.rentalEndPoint}/${rental}/${car}/retured`,null)
}