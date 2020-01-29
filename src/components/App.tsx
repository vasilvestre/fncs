import React, { Component } from 'react'
import 'typeface-roboto'
import { BrowserRouter, Route } from 'react-router-dom'
import TicketPage from './Ticket/TicketList'
import Navbar from './Navbar/Navbar'
import UserTicketList from './UserTicket/UserTicketList'
import { Container } from '@material-ui/core'
import { IAppState } from '../store/StoreConfiguration'
import { connect } from 'react-redux'
import TicketDto from '../models/TicketDto'

interface AppProps {
    tickets: TicketDto[]
}

interface AppState {
    tickets: TicketDto[]
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps, context: AppState) {
        super(props, context)
    }

    public render() {
        return (
            <BrowserRouter>
                <Navbar/>
                <Container>
                        <Route exact path="/">
                            <TicketPage/>
                        </Route>
                        <Route exact path="/my_tickets">
                            <UserTicketList
                                tickets={this.props.tickets}
                            />
                        </Route>
                </Container>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: IAppState) => ({
    tickets: state.tickets,
})

export default connect(mapStateToProps)(App)