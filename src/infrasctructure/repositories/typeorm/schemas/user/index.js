import {EntitySchema} from 'typeorm'

export default new EntitySchema({
    name: "Usuario",
    target: 'Usuario',
    schema: 'public',
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar"
        },
        age: {
            type: "int"
        },
        gender: {
            type: "varchar"
        }
    }
});