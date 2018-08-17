import DeleteUserFactory from '../factories/user/delete-user-factory'
import DeleteUserCommand from '../../domain/commands/user/delete-user'
import User from '../repositories/user'

export default class DeleteUserHandler {
    constructor() {
        this.DeleteUser= new DeleteUserFactory({resource: User, Command: DeleteUserCommand}).create()
    }

    async delete (args) {
        let result;
        this.DeleteUser.on('success', (data) => {
            result = data
        })
        this.DeleteUser.on('fail', (err) => {
            result = err
        })
        await this.DeleteUser.execute(args);
        return result;
    }
}
