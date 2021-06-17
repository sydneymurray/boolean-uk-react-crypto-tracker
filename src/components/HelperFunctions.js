import {CRIPTO_LIST} from "../constants.js"

export function getCryptoList(setCryptoList){
    return fetch(CRIPTO_LIST)
    .then(promise => promise.json())
    .then(cryptoList => setCryptoList(cryptoList))
}
