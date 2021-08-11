import * as axios from 'axios';

class MovieService {
    private readonly omdbUrl: string = `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}`;
    private readonly http: axios.AxiosStatic = axios.default;

    async search(title: string, page: number) {
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
            throw new Error(error.message)
        }
    }

    async detail(id: string) {
        try {
            const result = await this.http.get(`${this.omdbUrl}&i=${id}&r=json`);
            return result.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new MovieService();