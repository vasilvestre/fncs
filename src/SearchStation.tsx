import React, { Component } from 'react'
import { debounce } from 'lodash'

/*eslint-disable */
export class SearchStation extends Component<any, any> {
    constructor(props: any, context: any) {
        super(props, context)
        this.state = {
            query: '',
        }
        // eslint-disable-next-line
        //this.updateResults = debounce(this.props.updateResults, 200)
    }

    async searchStations(city: any) {
        if (city === '') {
            return [];
        }
        const promise = await this.getPromiseFromApi(city);
        const promiseJson = await promise.json()
        this.props.switchLoading()
        return promiseJson.records.map((record: { fields: any }) => record.fields)
    }

    async getPromiseFromApi(city: any) {
        return await fetch(this.props.baseUrl + city)
    }

    async onChange(evt: any) {
        this.props.switchLoading()
        const query = evt.target.value
        this.setState({
            query: query,
        })
        this.props.updateResults(await this.searchStations(query))
    }

    render() {
        return <div className={'input-field'}>
            <i className="material-icons prefix">train_circle</i>
            <input id={'search'} type="search" onChange={evt => this.onChange(evt)} value={this.state.query} className={'validate'}/>
            <label htmlFor={'search'}>City's name</label>
        </div>
    }
}
