import React, { Component } from 'react'
import { SearchStation } from './SearchStation'
import { ListStation } from './ListStation'


export class Homepage extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            apiResults: [],
            loading: false
        }
    }

    switchLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    updateResults = (results) => {
        this.setState({
            apiResults: results,
        })
    }

    render() {
        return <>
            <div className={"row"}>
                <div className={'col s12'}>
                    <SearchStation
                        baseUrl={'https://ressources.data.sncf.com/api/records/1.0/search/?dataset=referentiel-gares-voyageurs&q='}
                        updateResults={this.updateResults}
                        switchLoading={this.switchLoading}
                    />
                </div>
            </div>
            <div className={'row'}>
                <div className={'col s12'}>
                    <ListStation
                        results={this.state.apiResults}
                        loading={this.state.loading}
                    />
                </div>
            </div>
        </>
    }
}
