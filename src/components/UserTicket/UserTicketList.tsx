import React, { Component } from 'react'
import TicketDto from '../../models/TicketDto'
import Grid from '@material-ui/core/Grid'
import Ticket from '../Ticket/Ticket'

interface UserTicketListProps {
    tickets: TicketDto[]
}

class UserTicketList extends Component<UserTicketListProps, {}> {
    public render() {
        return (
            <Grid container spacing={2}>
                {this.props.tickets.map((ticket: TicketDto, index: number) => (
                    <Grid item xs={6} key={index}>
                        <Ticket
                            ticket={ticket}
                        />
                    </Grid>
                ))}
            </Grid>
        )
    }
}

export default UserTicketList