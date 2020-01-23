import React, { Component } from 'react'

/*eslint-disable */
export class ListStation extends Component<any, any> {
    render() {
        const loadedContent = <table className="table table-hover table-bordered results centered highlight responsive-table">
            <thead>
            <tr>
                <th className="col-l-3">City name</th>
                <th className="col-l-3">Station name</th>
                <th className="col-l-3">Region</th>
            </tr>
            </thead>
            <tbody>
            {this.props.results.map((result: { pltf_commune_libellemin: React.ReactNode; gare_alias_libelle_noncontraint: React.ReactNode; pltf_departement_libellemin: React.ReactNode }, i: string | number | undefined) => {
                return <tr key={i}>
                    <td>{result.pltf_commune_libellemin}</td>
                    <td>{result.gare_alias_libelle_noncontraint}</td>
                    <td>{result.pltf_departement_libellemin}</td>
                </tr>
            })}
            </tbody>
            </table>
        const loadingContent = (<div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>)
        if(this.props.loading) {
            return loadingContent
        }
        return this.props.results.length > 0 ? loadedContent : (<></>)
    }
}
