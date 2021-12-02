import ENDPOINTS from './endpoints';

const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io/api/v1'

class Api {
    constructor(baseUrl, endpoints) {
        this.baseUrl = baseUrl
        this.endpoints = endpoints
    }

    async genereteRequest(endpoint, data) {
        const {method, uri} = this.endpoints[endpoint]

        return fetch(`${this.baseUrl}${uri}`, {method, body: data})
    }

    async fetch(endpoint, data) {
        const response = await this.genereteRequest(endpoint, data)

        return response.json()
    }
}

export default new Api(BASE_URL, ENDPOINTS)