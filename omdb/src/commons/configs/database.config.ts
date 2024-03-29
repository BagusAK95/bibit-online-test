import { ConnectionOptions } from 'typeorm'
import { Log } from '../../logs/entitys/log.entity'

const connection: any = {
  type: process.env.SQL_TYPE || 'postgres',
  host: process.env.SQL_HOST || '127.0.0.1',
  port: Number(process.env.SQL_PORT) || 5432,
  username: process.env.SQL_USERNAME || 'postgres',
  password: process.env.SQL_PASSWORD || 'postgres',
  database: process.env.SQL_DATABASE || 'postgres',
  entities: [Log],
  synchronize: true
}

if (process.env.ENV === 'production') {
  connection.ssl = true;
  connection.extra = {
    ssl: {
      rejectUnauthorized: false
    }
  }
}

export default connection