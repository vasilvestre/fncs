import tickets from '../store/reducers/tickets-reducer'
import TicketDto from '../models/TicketDto'
import { connect } from 'react-redux'
import UserTicketList from '../components/UserTicket/UserTicketList'

const getUserTickets = (tickets: TicketDto[]) => {
    return tickets
}

const mapStateToProps = (state: any) => ({
    tickets: getUserTickets(state.tickets)
})

export default connect(mapStateToProps)(UserTicketList)