import React, { Component } from 'react'
import TicketDto from '../../models/TicketDto'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import CardHeader from '@material-ui/core/CardHeader'
import TrainTwoToneIcon from '@material-ui/icons/TrainTwoTone'
import DepartureBoardTwoToneIcon from '@material-ui/icons/DepartureBoardTwoTone'
import FlightLandTwoToneIcon from '@material-ui/icons/FlightLandTwoTone'
import CardActions from '@material-ui/core/CardActions'
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone'
import Button from '@material-ui/core/Button'
import { addTicket } from '../../store/actions/ticket-actions'
import { connect } from 'react-redux'

interface TicketProps {
    onAddTicket: any,
    ticket: TicketDto
}

class Ticket extends Component<TicketProps, any> {
    public render() {
        return (
            <Card>
                <CardHeader
                    title={'Ticket number ' + this.props.ticket.id}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <DepartureBoardTwoToneIcon/>
                            Departure at {this.props.ticket.departureAt}
                        </Grid>
                        <Grid item xs={4}>
                            <FlightLandTwoToneIcon/>
                            Incoming at {this.props.ticket.incomingAt}
                        </Grid>
                        <Grid item xs={4}>
                            <TrainTwoToneIcon/>
                            Train number {this.props.ticket.trainNumber}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="large" onClick={this.onClick}>
                        <AddShoppingCartTwoToneIcon/>
                    </Button>
                </CardActions>
            </Card>
        )
    }

    private onClick = (event: any) => {
        this.props.onAddTicket(this.props.ticket)
    }
}

const mapActionsToProps = {
    onAddTicket: addTicket,
}

export default connect(null, mapActionsToProps)(Ticket) //missing withStyles
