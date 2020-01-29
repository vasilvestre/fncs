import React, { Component } from 'react'
import 'typeface-roboto'
import { BrowserRouter, Link, Redirect, Route } from 'react-router-dom'
import TicketPage from './Ticket/TicketList'
import Navbar from './Navbar/Navbar'
import UserTicketList from './UserTicket/UserTicketList'
import { Button, Container } from '@material-ui/core'
import { IAppState } from '../store/StoreConfiguration'
import { connect } from 'react-redux'
import TicketDto from '../models/TicketDto'
import Toolbar from '@material-ui/core/Toolbar'

interface AppProps {
    tickets: TicketDto[]
}

interface AppState {
    tickets: TicketDto[],
    auth: boolean
}

class App extends Component<AppProps, AppState> {
    constructor(props: AppProps, context: AppState) {
        super(props, context)
        this.state = {
            ...context,
            auth: localStorage.getItem('auth') === 'true'
        }
    }

    public render() {
        return (
            <BrowserRouter>
                {!this.state.auth && <Redirect to='/sign_in' />}
                <Navbar
                    openLogin={!this.state.auth}
                />
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