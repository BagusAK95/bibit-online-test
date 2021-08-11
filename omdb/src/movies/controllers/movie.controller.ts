import express from 'express';
import MovieService from '../services/movie.service';

class MovieController {
    async search(req: any, res: any) {
        const title = req.query.title;
        const page = req.query.page;

        const result = await MovieService.search(title, page)
        res.status(200).send(result);
    }

    async detail(req: any, res: any) {
        const id = req.params.id;

        const result = await MovieService.detail(id)
        res.status(200).send(result);
    }
}

export default new MovieController();