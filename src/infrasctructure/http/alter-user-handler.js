import AlterUserFactory from '../factories/user/alter-user-factory'
import AlterUserCommand from '../../domain/commands/user/alter-user'
import User from '../repositories/user'
import UserServices from '../../domain/services/user'

export default class AlterUserHandler {
    constructor() {
        this.AlterUser= new AlterUserFactory({
            resource: User, 
            Command: AlterUserCommand, 
            Services: UserServices}).create()
    }

    async alter (id,args) {
        let result;
        this.AlterUser.on('success', (data) => {
            result = data
        })
        this.AlterUser.on('fail', (err) => {
            result = err
        })
        await this.AlterUser.execute(id,args);
        return result;
    }
}
