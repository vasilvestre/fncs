import TicketDto from '../../models/TicketDto'
import { ADD_TICKET, REMOVE_TICKET } from '../actions/ticket-actions'

const ticketsReducer = (state: TicketDto[] = [], action: any) => {
    let newState: TicketDto[] = [];
    switch (action.type) {
        case ADD_TICKET:
            newState = [
                ...state,
                action.ticket
            ];
            return newState;
        case REMOVE_TICKET:
            return state.filter(ticket => ticket !== action.ticket)
        default:
            return state
    }
}
export default ticketsReducer