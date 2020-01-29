import { TicketService } from './TicketService'
import TicketDto from '../models/TicketDto'

beforeEach(() => {
    // @ts-ignore
    fetch.resetMocks()
})

test('getAll tickets output', () => {
    // @ts-ignore
    fetch.mockResponseOnce(JSON.stringify({
        'records': [{
            'datasetid': 'tgvmax',
            'recordid': '5c9e535ff7beae0b9c4508f9b59680ce97f6',
            'fields': {
                'heure_depart': '6:38',
                'heure_arrivee': '9:05',
                'code_equip': 'TGP',
                'destination': 'PARIS (intramuros)',
                'train_no': 2350,
                'entity': 'MULHSTRAPA',
                'origine': 'COLMAR',
                'destination_iata': 'FRPST',
                'origine_iata': 'FRAEJ',
                'od_happy_card': 'OUI',
                'axe': 'EST',
                'date': '2020-02-28',
            },
            'record_timestamp': '2020-01-28T08:49:00+00:00',
        }, {
            'datasetid': 'tgvmax',
            'recordid': '70df0637891c4cc215a55e6c35808686c305ce89',
            'fields': {
                'heure_depart': '6:38',
                'heure_arrivee': '6:49',
                'code_equip': 'TGP',
                'destination': 'SELESTAT',
                'train_no': 2350,
                'entity': 'MULHSTRAPA',
                'origine': 'COLMAR',
                'destination_iata': 'FRXSQ',
                'origine_iata': 'FRAEJ',
                'od_happy_card': 'OUI',
                'axe': 'EST',
                'date': '2020-02-28',
            },
            'record_timestamp': '2020-01-28T08:49:00+00:00',
        }],
    }))
    TicketService.getAll().then((tickets: TicketDto[]) => {
        expect(tickets).toEqual([
            {
                id: '5c9e5',
                incomingAt: '6:38',
                departureAt: '9:05',
                destination: 'PARIS (intramuros)',
                trainNumber: 2350,
                origin: 'COLMAR',
                date: '2020-02-28',
                price: 20,
            }, {
                'date': '2020-02-28',
                'departureAt': '6:49',
                'destination': 'SELESTAT',
                'id': '70df0',
                'incomingAt': '6:38',
                'origin': 'COLMAR',
                'price': 20,
                'trainNumber': 2350,
            },
        ])
    })
})
