import UserModel from '../../../domain/entities/user'
import Database from '../database'

// TYPEORM vem aqui.

export default class User extends Database {
    async getById(id){
        const connection = await this.getConnection();
        let result = await connection.getRepository('Usuario')
        .createQueryBuilder()
        .select()
        .where('id = :id', {id})
        .getOne();
        await connection.dispose();
        return result; 
    }
}