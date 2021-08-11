import express from 'express';
import * as http from 'http';
import { createConnection } from 'typeorm';
import { RoutesConfig } from './commons/configs/routes.config';
import { MovieRoutes } from './movies/movie.routes';
import { LogRoutes } from './logs/log.routes';
import logMiddleware from './commons/middlewares/log.middleware';
import dbConn from './commons/configs/database.config'
import debug from 'debug';
import cors from 'cors'

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = process.env.PORT || 3000;
const routes: Array<RoutesConfig> = [];
const debugLog: debug.IDebugger = debug('log:main');

app.use(express.json());
app.use(cors());
app.use('*', logMiddleware.save)
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running on port ${port}`)
});

routes.push(new MovieRoutes(app));
routes.push(new LogRoutes(app));

createConnection(dbConn).then(() => {
    server.listen(port, () => {
        debugLog(`Server running on port ${port}`);
        routes.forEach((route: RoutesConfig) => {
            debugLog(`Routes configured for ${route.getName()}`);
        });
    });
}).catch((err) => {
    debugLog(`Unable to connect to database: ${err.message}`);
    process.exit(1)
})
