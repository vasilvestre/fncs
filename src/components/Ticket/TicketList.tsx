import React, { Component } from 'react'
import TicketDto from '../../models/TicketDto'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Ticket from './Ticket'
import { TicketService } from '../../services/TicketService'

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
    },
})

class TicketList extends Component<any, any> {
    state = {
        tickets: [],
        loading: true,
        error: false,
    }

    componentDidMount(): void {
        TicketService.getAll()
            .then((tickets: TicketDto[]) => {
                this.setState({
                    tickets: tickets,
                    loading: false,
                })
            })
            .catch(error => this.setState({
                loading: false,
                error: true,
            }))
    }

    render(): any {
        const { tickets, loading, error } = this.state
        return (
            <>
                {loading && <div>Loading...</div>}
                {!loading && !error &&
                <Grid container id="ticket-list-container" className={this.props.classes.root} spacing={2}>
                    {tickets.map((ticket: TicketDto, index: number) => (
                        <Grid item xs={6} key={index}>
                            <Ticket
                                ticket={ticket}
                            />
                        </Grid>
                    ))}
                </Grid>}
                {error && <div>Error message</div>}
            </>
        )
    }
}

export default withStyles(styles)(TicketList)
