import {createConnection} from 'typeorm'
import path from 'path'

export default class Database {
    async getConnection () {
        let connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "postgres",
            synchronize: false,
            logging: false,
            entities: [
                path.resolve(__dirname, '../typeorm/schemas/**/index.js')
            ]
        })
        return Object.assign(connection, {
            async dispose() {
                if(this.isConnected){
                    this.manager.connection.close();
                }
            }
        })
    }
}