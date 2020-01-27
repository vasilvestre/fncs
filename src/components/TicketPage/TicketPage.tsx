import React, { Component } from 'react'
import Ticket from '../../domain/models/Ticket'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

const URL = 'https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&sort=date&facet=date&facet=origine&facet=destination&facet=od_happy_card'

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

class TicketPage extends Component<any, any> {
    state = {
        tickets: [],
        loading: true,
        error: false,
    }

    componentDidMount(): void {
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                let tickets: Ticket[] = []
                json.records.map((record: any) => {
                    const fields = record.fields
                    let ticket: Ticket = {
                        id: record.recordId,
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
        const bull = <span className={this.props.classes.bullet}>•</span>
        return (
            <>
                {loading && <div>Loading...</div>}
                {!loading && !error &&
                <Grid container className={this.props.classes.root} spacing={2}>
                    {tickets.map((ticket: Ticket) => (
                        <Grid item xs={6}>
                            <Card key={ticket.id} className={this.props.classes.card}>
                                <CardContent>
                                    <Typography className={this.props.classes.title}>
                                        {ticket.incomingAt}
                                    </Typography>
                                    <Typography>
                                        {ticket.departureAt}
                                    </Typography>
                                    <Typography>
                                        {ticket.trainNumber}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>}
                {error && <div>Error message</div>}
            </>
        )
    }
}

export default withStyles(styles)(TicketPage)
