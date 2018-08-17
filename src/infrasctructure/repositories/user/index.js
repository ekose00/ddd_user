import Database from '../database'
import UserModel from '../../../domain/entities/user'

// TYPEORM vem aqui.

export default class User extends Database {
    async getById(id) {
        const connection = await this.getConnection();
        let result = await connection.getRepository('Usuario')
            .createQueryBuilder()
            .select()
            .where('id = :id', { id })
            .getOne();
        await connection.dispose();
        return result;
    }

    async save(user) {
        const connection = await this.getConnection()
        let result = await connection.getRepository('Usuario')
            .save(new UserModel(user))
        await connection.dispose();
        return result
    }

    async delete(id) {
        const connection = await this.getConnection();
        let result = await connection.getRepository('Usuario')
            .delete(id)
        await connection.dispose();
        return result;
    }

}