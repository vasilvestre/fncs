import React, { Component } from 'react'

/*eslint-disable */
export class ListStation extends Component {
    render() {
        const content = <table className="table table-hover table-bordered results centered highlight responsive-table">
            <thead>
            <tr>
                <th className="col-l-3">City name</th>
                <th className="col-l-3">Station name</th>
                <th className="col-l-3">Region</th>
            </tr>
            </thead>
            <tbody>
            {this.props.results.map((result, i) => {
                console.log(result)
                return <tr key={i}>
                    <td>{result.pltf_commune_libellemin}</td>
                    <td>{result.gare_alias_libelle_noncontraint}</td>
                    <td>{result.pltf_departement_libellemin}</td>
                </tr>
            })}
            </tbody>
            </table>
        return this.props.results.length > 0 ? content : <></>
    }
}
