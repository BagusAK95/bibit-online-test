import express from 'express';
import { RoutesConfig } from '../common/configs/routes.config';

export class MovieRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MovieRoutes');
    }

    routes() {
        return this.app;
    }
}