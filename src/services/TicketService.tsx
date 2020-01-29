import { login, logout } from './AuthService'
import UserLogin from '../models/UserLogin'
import TicketDto from '../models/TicketDto'

const URL = 'https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&sort=date&facet=date&facet=origine&facet=destination&facet=od_happy_card'

export const TicketService = {
    getAll,
}

export async function getAll() {
    let res = await fetch(URL)
    let json: any = await res.json()
    let tickets: TicketDto[] = []
    json.records.map((record: any) => {
        const fields = record.fields
        let ticket: TicketDto = {
            id: record.recordid.substring(0, 5),
            incomingAt: fields.heure_depart,
            departureAt: fields.heure_arrivee,
            destination: fields.destination,
            trainNumber: fields.train_no,
            origin: fields.origine,
            date: fields.date,
        }
        tickets.push(ticket)
    })
    return tickets
}