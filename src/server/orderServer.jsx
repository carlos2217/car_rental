import http from './http'
import config from './config.json'


export function allOrders() {
    return http.get(`${config.orderEndPoint}`)
}
export function confirm(data,rental,order) {
    return http.put(`${config.orderEndPoint}/${rental}/${order}`,data)
}
export function count() {
    return http.get(`${config.orderEndPoint}/count`)
}
export function consle(id) {
    return http.delete(`${config.orderEndPoint}/${id}`)
}