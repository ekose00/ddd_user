import Base from '../base'
import MESSAGES from '../../messages'

export default class InsertUserCommand extends Base {
    constructor({ resource, services }){
        super()
        this.resource = resource
        this.services = services;
    }

    async validate(args) {
        return this.services.validate(args);
    }

    async execute(args){ 
        if(args){
            let validatedUser = await this.validate(args);
            if(validatedUser){
                let addedUser = await this.resource.save(args);
                if(addedUser) {
                    this.emit('success', args)
                    return;
                }else {
                    this.emit('fail', MESSAGES.USER.failedInsert)
                }
            }else {
                this.emit('fail', MESSAGES.USER.failedInsert)
            }
        }
        this.emit('fail', MESSAGES.USER.failedInsert);
    }
}