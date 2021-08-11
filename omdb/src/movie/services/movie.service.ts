import * as axios from 'axios';
import * as dotenv from 'dotenv';

class MovieService {
    private readonly omdbUrl: string;
    private readonly http: any;
    
    constructor() {
        dotenv.config();

        const omdbApiKey = process.env.OMDB_API_KEY;
        this.omdbUrl = `http://www.omdbapi.com/?apikey=${omdbApiKey}`;

        this.http = axios.default;
    }

    async search(title: any, page: any) {
        try {
            const query: string[] = [];
            if (title) {
                query.push(`s=${title}`)
            }
            if (page) {
                query.push(`page=${page}`)
            }
            query.push(`r=json`)

            const result = await this.http.get(`${this.omdbUrl}&${query.join('&')}`);
            return result.data;
        } catch (error) {
            return error.message
        }
    }

    async detail(id: string) {
        const result = await this.http.get(`${this.omdbUrl}&i=${id}&r=json`);
        return result.data;
    }
}

export default new MovieService();