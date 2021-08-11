import LogService from '../../logs/services/log.service'

class LogMiddleware {
    async save(req: any, res: any, next: any) {
        await LogService.save(req.originalUrl)
        next();
    }
}

export default new LogMiddleware();