import Joi from 'joi'
import validate from '../../../helpers/validate'

export default class User {
    constructor({id, name, age, gender}){
        this.id = id;
        this.name = name;
        this.age = age;
        this.gender = gender
    }

    isValid() {
        const rules = Joi.object().keys({
            id: Joi.string().required(),
            name: Joi.number().required(),
            age: Joi.string().required(),
            gender: Joi.string().required()
        })
        return validate(rules, this);
    }

    hasValidAge() {
        return this.age > 0;
    }
}