export default class InsertUserFactory {
    constructor({ resource, Command, Services }){
        this.Resource = resource
        this.Command = Command
        this.Services = Services
    }

    create(){
        return new this.Command({ resource: new this.Resource(), services: new this.Services() })
    }
}