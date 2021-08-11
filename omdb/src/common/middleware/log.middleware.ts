import express from 'express';
import LogService from '../../log/service/log.service'

class LogMiddleware {
    async save(req: express.Request, res: express.Response, next: express.NextFunction) {
        await LogService.save(req.originalUrl)
        next();
    }
}

export default new LogMiddleware();