import express from 'express';
import { MovieService } from '../services/movie.service';

export class MovieController {
    constructor(private readonly movie: MovieService) {}

    async search(req: express.Request, res: express.Response) {
        const title = req.query.title;
        const page = req.query.page || 1;

        const result = await this.movie.search(title as string, page as number)
        res.status(200).send(result);
    }

    async detail(req: express.Request, res: express.Response) {
        const id = req.params.id;

        const result = await this.movie.detail(id)
        res.status(200).send(result);
    }
}