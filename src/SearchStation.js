import React, { Component } from 'react'
import { debounce } from 'lodash'

/*eslint-disable */
export class SearchStation extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            query: '',
        }
        this.updateResults = debounce(this.props.updateResults, 500)
    }

    async searchStations(city) {
        if (city === '') {
            return [];
        }
        const promise = await this.getPromiseFromApi(city);
        const promiseJson = await promise.json()
        return promiseJson.records.map(record => record.fields)
    }

    async getPromiseFromApi(city) {
        return await fetch(this.props.baseUrl + city)
    }

    async onChange(evt) {
        const query = evt.target.value
        this.setState({
            query: query,
        })
        this.updateResults(await this.searchStations(query))
    }

    render() {
        return <div className={'input-field'}>
            <i className="material-icons prefix">train_circle</i>
            <input id={'search'} type="search" onChange={evt => this.onChange(evt)} value={this.state.query} className={'validate'}/>
            <label htmlFor={'search'}>City's name</label>
        </div>
    }
}
