import TicketDto from '../../models/TicketDto'

export const ADD_TICKET = 'tickets:addTicket'
export const REMOVE_TICKET = 'tickets:removeTicket'

export function addTicket(newTicket: TicketDto) {
    return {
        type: ADD_TICKET,
        ticket: newTicket,
    }
}
export function removeTicket(ticketToRemove: TicketDto) {
    return {
        type: REMOVE_TICKET,
        ticket: ticketToRemove
    }
}
