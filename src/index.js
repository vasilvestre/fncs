import React from 'react'
import ReactDOM from 'react-dom'
import { Homepage } from './Homepage'
import { TopTitle } from './TopTitle'

import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

function App() {
    return (
        <div className={'container'}>
            <TopTitle></TopTitle>
            <div className={'row'}>
                <Homepage></Homepage>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
