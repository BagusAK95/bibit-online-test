import LogService from '../../logs/services/log.service'
import LogMiddleware from './log.middleware'

describe('LogMiddleware', () => {
    describe('save', () => {
        test('should not return error', async () => {
            const mReq = { 
                originalUrl: '/movie/?title=evenger'
            };
            const mRes = jest.fn()
            const mNext = jest.fn()

            const spy = jest
                .spyOn(LogService, 'save')
                .mockReturnValue({});

            await LogMiddleware.save(mReq, mRes, mNext)
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith('/movie/?title=evenger')
        })
    })
})