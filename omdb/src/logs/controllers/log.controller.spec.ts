import LogService from "../services/log.service";
import LogController from "./log.controller";

describe('LogController', () => {
    describe('show', () => {
        test('should success to call log service', async () => {
            const mReq = {};
            const mRes = { 
                status: jest.fn().mockReturnValue({ 
                    send: jest.fn().mockReturnValue({})
                }),
            };

            const spy = jest
                .spyOn(LogService, 'show')
                .mockReturnValue({});

            await LogController.show(mReq, mRes)
            expect(spy).toHaveBeenCalledTimes(1);
        })
    })
})