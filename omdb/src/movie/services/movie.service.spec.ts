import MovieService from "./movie.service";
import * as axios from "axios";

describe('MovieService', () => {
    describe('search', () => {
        test('should return movie list', async () => {
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
            expect(result.totalResults).toBeGreaterThan(0)
        })

        test('should return error not found', async () => {
            jest.spyOn(axios.default, 'get')
            .mockResolvedValueOnce({
                data: {
                    Response: "False",
                    Error: "Movie not found!"
                }
            });

            const result = await MovieService.search('tali pocong janda', 1)
            expect(result).not.toBe(null);
            expect(result.Error).toBe('Movie not found!')
        })
    })

    describe('detail', () => {
        test('should return movie detail', async () => {
            jest.spyOn(axios.default, 'get')
                .mockResolvedValueOnce({
                    data: {
                        Title: "Batman Begins",
                        imdbID: "tt0372784"
                    }
                });

            const result = await MovieService.detail('tt0372784')
            expect(result).not.toBe(null);
            expect(result.imdbID).toBe('tt0372784')
        })

        test('should return error not found', async () => {
            jest.spyOn(axios.default, 'get')
                .mockResolvedValueOnce({
                    data: {
                        Response: "False",
                        Error: "Error getting data."
                    }
                });

            const result = await MovieService.detail('xxx')
            expect(result).not.toBe(null);
            expect(result.Error).toBe('Error getting data.')
        })
    })
})