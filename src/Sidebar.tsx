import React, { Component } from 'react'
import * as M from 'materialize-css'
import { Link, Route, Switch } from 'react-router-dom'
import { UserPanel } from './UserPanel'

export class Sidebar extends Component<any, any> {

    componentDidMount(): void {
        let elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems)
    }

    render() {
        return (
            <>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large">
                            <i className="material-icons">menu</i>
                        </a>
                        <a className={"brand-logo center"}>
                            FNCS
                        </a>
                    </div>
                </nav>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                                <UserPanel
                                    nom={"Silvestre"}
                                    email={"vasilvestre@laposte.net"}
                                    prenom={"Valentin"}
                                />
                        </div>
                    </li>
                    <li><Link to="/">Homepage - FNCS</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </>
        )
    }
}
