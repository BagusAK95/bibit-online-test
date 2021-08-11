import express from 'express';
import { RoutesConfig } from '../commons/configs/routes.config';
import LogController from './controllers/log.controller'

export class LogRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'LogRoutes');
    }

    routes() {
        this.app.route(`/log`).get(LogController.show)

        return this.app;
    }
}