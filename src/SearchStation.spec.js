import { SearchStation } from './SearchStation'

it('ok', async () => {
    const searchStation = new SearchStation({updateResults: jest.fn()})
    searchStation.getPromiseFromApi = jest.fn().mockResolvedValue(
        []
    )
    const result = await searchStation.searchStations('')
    expect(result).toEqual([]);
})
