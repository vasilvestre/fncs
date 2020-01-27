import React, { Component } from 'react'
import Ticket from '../../domain/models/Ticket'

const URL = 'https://ressources.data.sncf.com/api/records/1.0/search/?dataset=tgvmax&sort=date&facet=date&facet=origine&facet=destination&facet=od_happy_card'

export default class TicketPage extends Component {
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
                tickets.map((ticket: Ticket) => (
                    <div key={ticket.trainNumber}>
                        {ticket.incomingAt}
                        {ticket.departureAt}
                        {ticket.trainNumber}
                    </div>
                ))
                }
                {error && <div>Error message</div>}
            </>
        )
    }
}