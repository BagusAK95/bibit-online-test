import { getRepository, Repository } from "typeorm";
import { Log } from '../entitys/log.entity'

class LogService {    
    async save(url: string) {
        const log: Repository<Log> = getRepository(Log);
        return await log.save({ url })
    }

    async show() {
        const log: Repository<Log> = getRepository(Log);
        const [ data, total ] = await log.findAndCount({ take: 10, order: { createdAt: 'DESC' } })
        return {
            data,
            total
        }
    }
}

export default new LogService();