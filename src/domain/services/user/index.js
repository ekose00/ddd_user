import User from '../../entities/user'

export default class {
    constructor(service){
        this.service = service;
    }
    validate (args) {
        let user = new User(args);
        let validAge = user.hasValidAge()
        let valid = user.isValid();
        
        if(valid.error !== null && validAge){
            return true
        }else {
            return false
        }
    }
}