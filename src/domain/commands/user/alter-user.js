import Base from '../base'
import MESSAGES from '../../messages'

export default class AlterUserCommand extends Base {
    constructor({ resource, services }){
        super()
        this.resource = resource
        this.services = services;
    }

    async validate(args) {
        return this.services.validate(args);
    }

    async execute(id,args){ 
        if(args){
            let validatedUser = await this.validate(args);
            if(validatedUser){
                let addedUser = await this.resource.alter(id,args);
                if(addedUser) {
                    this.emit('success', args)
                    return;
                }else {
                    this.emit('fail', MESSAGES.USER.failedAlter)
                }
            }else {
                this.emit('fail', MESSAGES.USER.failedAlter)
            }
        }
        this.emit('fail', MESSAGES.USER.failedAlter);
    }
}