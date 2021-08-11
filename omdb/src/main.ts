import express from 'express';
import * as http from 'http';
import * as bodyparser from 'body-parser';
import cors from 'cors'
import { RoutesConfig } from './common/configs/routes.config';
import { MovieRoutes } from './movie/movie.routes';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<RoutesConfig> = [];
const debugLog: debug.IDebugger = debug('log');

app.use(bodyparser.json());
app.use(cors());

routes.push(new MovieRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${port}`)
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: RoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});