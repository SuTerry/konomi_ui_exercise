import ajax from '@api/ajax'

import Utils from '@utils/index'



export interface BaseData {
    id:                  number;
    blockNumber:         number;
    transactionIndex:    number;
    sources:             number[];
    symbol:              string;
    slug:                string;
    leaseEnd:            number;
    subscriptionId:      number;
    networkId:           number;
    aggregationStrategy: number;
    reportingStrategy:   number;
    status:              number;
    client:              Client;
    createdTimestamp:    number;
    updatedTimestamp:    number;
    display:             boolean;
}

export interface Client {
    clientType:     number;
    connectionInfo: ConnectionInfo;
}

export interface ConnectionInfo {
    contractAddress: string;
    networkId:       number;
}


const base: BaseData = {
    "id": 71,
    "blockNumber": 12297450,
    "transactionIndex": 6,
    "sources": [
        0,
        1,
        2,
        3
    ],
    "symbol": "eth",
    "slug": "ethereum",
    "leaseEnd": 12499050,
    "subscriptionId": 7,
    "networkId": 0,
    "aggregationStrategy": 1,
    "reportingStrategy": 0,
    "status": 1,
    "client": {
        "clientType": 0,
        "connectionInfo": {
            "contractAddress": "0x0F9dfd6043965B02e74D01188c13936fBE71D688",
            "networkId": 0
        }
    },
    "createdTimestamp": Date.now(),
    "updatedTimestamp": Date.now(),
    "display": true
}

/**
 * create random Integrate
 * @returns 
 */
const initBase = (): BaseData => {
    const currentData = Object.assign({}, base, {
        id: Utils.randomID(),
        status: Math.floor(Math.random() * (3 - 1 + 1) + 1),
        createdTimestamp: Utils.randomID(),
        updatedTimestamp: Utils.randomID(),
    })
    return currentData
}

/**
 * get coin data
 */
const getCoinData = (): Promise<BaseData[]>  => {

    const result: BaseData[] = []
    
    for (let i = 0; i < 8; i++) {
        result.push(initBase())
    }
    return ajax(result, 0)
}

/**
 * get coin name
 */
const getCoinName = (id: number): Promise<string>  => ajax('BLA')

/**
 * get coin price
 */
const getCoinPrice = (id: number): Promise<string>  => ajax('$ 3,412,025.12', 3000)


export default {
    getCoinData,
    getCoinName,
    getCoinPrice,
}