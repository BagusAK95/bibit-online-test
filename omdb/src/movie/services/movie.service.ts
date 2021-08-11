import * as axios from 'axios';

export class MovieService {
    private readonly omdbUrl: string;
    private readonly http: any;
    
    constructor() {
        const omdbApiKey = process.env.OMDB_API_KEY;
        this.omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}`;

        this.http = axios.default;
    }

    async search(title: string, page: number) {
        return await this.http.get(`${this.omdbUrl}&s=${title}&page=${page}`);
    }

    async detail(id: string) {
        return await this.http.get(`${this.omdbUrl}&i=${id}`);
    }
}