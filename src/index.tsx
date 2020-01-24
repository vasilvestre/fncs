import React from 'react'
import ReactDOM from 'react-dom'
import { Homepage } from './Homepage'
import { TopTitle } from './TopTitle'
import { Sidebar } from './Sidebar'

import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Contact } from './Contact'

function App() {
    return (
        <>
            <Router>
                <Sidebar/>
                <div className={'container'}>
                    <div className={'row'}>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                    </div>
                </div>
            </Router>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
