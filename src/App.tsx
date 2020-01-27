import React from 'react'
import 'typeface-roboto'
import Navbar from './components/Navbar/Navbar'
import TicketPage from './components/TicketPage/TicketPage'

const App: React.FC = () => {
    return (
        <>
            <Navbar/>
            <TicketPage/>
        </>
    )
}

export default App
