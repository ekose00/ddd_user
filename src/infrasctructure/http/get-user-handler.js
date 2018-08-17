import GetUserFactory from '../factories/user/get-user-factory'
import GetUserCommand from '../../domain/commands/user/get-user'
import User from '../repositories/user'

export default class GetUserHandler {
    constructor() {
        this.GetUser = new GetUserFactory({resource: User, Command: GetUserCommand}).create()
    }

    async get (args) {
        let result;

        this.GetUser.on('sucess', (data =>{
            result = data;
        }))
        this.GetUser.on('fail', (err) =>{
            result = err;
        })
        await this.GetUser.execute(args);
        return result;
    }
}