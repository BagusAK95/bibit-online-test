import MovieController from "./movie.controller";
import MovieService from "../services/movie.service";

describe('MovieController', () => {
    describe('search', () => {
        test('should success to call movie service', async () => {
            const mReq = { 
                query: { 
                    title: 'avenger', 
                    page: 1 
                } 
            };
            const mRes = { 
                status: jest.fn().mockReturnValue({ 
                    send: jest.fn().mockReturnValue({})
                }),
            };

            const spy = jest
                .spyOn(MovieService, 'search')
                .mockReturnValue({});

            await MovieController.search(mReq, mRes)
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith('avenger', 1)
        })
    })

    describe('detail', () => {
        test('should success to call movie service', async () => {
            const mReq = { 
                params: { 
                    id: 'tt0372784' 
                } 
            };
            const mRes = { 
                status: jest.fn().mockReturnValue({ 
                    send: jest.fn().mockReturnValue({})
                }),
            };

            const spy = jest
                .spyOn(MovieService, 'detail')
                .mockReturnValue({});

            await MovieController.detail(mReq, mRes)
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith('tt0372784')
        })
    })
})