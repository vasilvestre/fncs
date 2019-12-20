import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EmailValidator from 'email-validator'

/*eslint-disable */
export class UserPanel extends Component {
    render() {
        const { nom, email, prenom } = this.props
        return <div className={'col s12 m3'}>
            <div className={'card'}>
                <div className={'card-image'}>
                    <img src={'https://www.gravatar.com/avatar/' + md5(email)} alt=""/>
                    <span className={'card-title'}>{nom + ' ' + prenom}</span>
                </div>
                <div className={'card-content'}>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    }
}

const requiredEmailPropType = (props, propName, componentName) => {
    const value = props[propName]
    if (value == null || typeof value !== 'string' || !EmailValidator.validate(value)) {
        return new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`)
    }
    return null
}
const emailPropType = (props, propName, componentName) => {
    if (props[propName] == null) {
        return null
    }
    return requiredEmailPropType(props, propName, componentName)
}
emailPropType.isRequired = requiredEmailPropType

UserPanel.propTypes = {
    email: emailPropType,
    nom: PropTypes.string,
    prenom: PropTypes.string,
}

UserPanel.defaultProps = {
    email: 'vasilvestre@laposte.net',
    nom: 'Silvestre',
    prenom: 'Valentin',
}
