import LogService from './log.service'

jest.mock('typeorm', () => ({
    ...jest.requireActual('typeorm'),
    getRepository: jest.fn().mockReturnValue({ 
        save: jest.fn().mockReturnValue({
            id: 'faf3df17-5324-4fd6-85d5-92d37c705264'
        })
    }),
}));

describe('LogService', () => {
    describe('save', () => {
        test('should save data to database', async () => {
            const result = await LogService.save('/movie/?title=evenger')
            expect(result).not.toBe(null);
            expect(result.id).toBe('faf3df17-5324-4fd6-85d5-92d37c705264')
        })
    })
})