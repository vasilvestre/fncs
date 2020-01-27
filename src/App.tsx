import React from 'react'
import 'typeface-roboto'
import { BrowserRouter, Route } from 'react-router-dom'
import TicketPage from './components/TicketPage/TicketPage'
import Navbar from './components/Navbar/Navbar'
import UserTicketPage from './components/UserTicket/UserTicketPage'
import { Container } from '@material-ui/core'

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Container>
                <BrowserRouter>
                    <Route exact path="/">
                        <TicketPage/>
                    </Route>
                    <Route exact path="/my_tickets">
                        <UserTicketPage/>
                    </Route>
                </BrowserRouter>
            </Container>
        </>
    )
}

export default App
