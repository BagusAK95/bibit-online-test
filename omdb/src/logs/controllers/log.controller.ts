import logService from '../services/log.service';

class LogController {
    async show(req: any, res: any) {
        const result = await logService.show()
        res.status(200).send(result);
    }
}

export default new LogController();