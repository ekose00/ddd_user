import InsertUserFactory from '../factories/user/insert-user-factory'
import InsertUserCommand from '../../domain/commands/user/insert-user'
import User from '../repositories/user'
import UserServices from '../../domain/services/user'

export default class InsertUserHandler {
    constructor() {
        this.InsertUser = new InsertUserFactory({
            resource: User,
            Command: InsertUserCommand,
            Services: UserServices
        }).create()
    }

    async post(args) {
        let result;
        this.InsertUser.on('sucess', (data => {
            result = data;
        }))
        this.InsertUser.on('fail', (err) => {
            result = err;
        })
        await this.InsertUser.execute(args);
        return result;
    }
}