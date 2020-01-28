import TicketDto from '../../models/TicketDto'

export const ADD_TICKET = 'tickets:addTicket'
export const REMOVE_TICKET = 'tickets:removeTicket'

export function addTicket(ticket: TicketDto) {
    return {
        type: ADD_TICKET,
        ticket: ticket,
    }
}
export function removeTicket(ticket: TicketDto) {
    return {
        type: REMOVE_TICKET,
        ticket: ticket,
    }
}