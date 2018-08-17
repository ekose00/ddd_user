import Base from '../base'

import MESSAGES from '../../messages'


export default class GetUserCommand extends Base {
    constructor({resource}){
        super();
        this.resource = resource;
    }

    async execute({id}){
        let result;
        if(id){
            result = await this.resource.getById(id);
        } else {
            result = await this.resource.getById();
        }

        if(result){
            this.emit('sucess',result)
            return
        }
        this.emit('fail',MESSAGES.USER.failedGet);
    }
}