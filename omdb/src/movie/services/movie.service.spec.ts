import MovieService from "./movie.service";
import * as axios from "axios";

describe('MovieService', () => {
    describe('search', () => {
        it('should return movie list', async () => {
            jest.spyOn(axios.default, 'get')
            .mockResolvedValueOnce({
                data: {
                    Search: [{
                        Title: "Captain America: The First Avenger",
                        imdbID: "tt0458339",
                    }],
                    totalResults: 1,
                    Response: true
                }
            });

            const result = await MovieService.search('avenger', 1)
            expect(result).not.toBe(null);
            expect(result.Response).toBe(true)
            expect(result.totalResults).toBeGreaterThan(0)
        })
    })  
})