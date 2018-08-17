export default class DeleteUserFactory {
    constructor({resource,Command}) {
        this.Resource = resource,
        this.Command = Command;
    }

    create() {
        return new this.Command({resource: new this.Resource()});
    }
}