import express from 'express';
import { RoutesConfig } from '../commons/configs/routes.config';
import MovieController from './controllers/movie.controller'

export class MovieRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'MovieRoutes');
    }

    routes() {
        this.app.route(`/movie`).get(MovieController.search)
        this.app.route(`/movie/:id`).get(MovieController.detail)

        return this.app;
    }
}