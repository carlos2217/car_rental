import _ from 'lodash'

export function RendPaginations(items,pageNubber,pageSize) {
    const startIndex = (pageNubber - 1) * pageSize
    return _(items).slice(startIndex).take(pageNubber).value() 
}