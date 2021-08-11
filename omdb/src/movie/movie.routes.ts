import express from 'express';
import { RoutesConfig } from '../common/config/routes.config';

export class MovieRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MovieRoutes');
    }

    routes() {
        return this.app;
    }
}