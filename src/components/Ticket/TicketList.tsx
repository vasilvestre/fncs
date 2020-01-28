import React, { Component } from 'react'
import TicketDto from '../../models/TicketDto'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Ticket from './Ticket'

const URL = 'https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&sort=date&facet=date&facet=origine&facet=destination&facet=od_happy_card'

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
        fetch(URL)
            .then(res => res.json())
            .then(json => {
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
                <Grid container className={this.props.classes.root} spacing={2}>
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
