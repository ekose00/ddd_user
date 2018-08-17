import request from '../../../helpers/request'


export default class Product {
    constructor(){
        this.url = ''
    }
    async getProduct () {
        return request.get(this.url)
    }
}