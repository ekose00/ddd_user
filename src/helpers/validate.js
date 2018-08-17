import Joi from 'joi'


export default (rules, schema) => {
    return Joi.validate(schema, rules)
}