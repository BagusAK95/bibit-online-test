import { getRepository, Repository } from "typeorm";
import { Log } from '../entity/log.entity'

class LogService {    
    async save(url: string) {
        const log: Repository<Log> = getRepository(Log);
        await log.save({ url })
    }
}

export default new LogService();