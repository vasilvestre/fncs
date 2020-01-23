import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmailValidator from 'email-validator';
import md5 from 'md5'

interface UserPanelProps {
    nom: string;
    email: string;
    prenom: string;
}

const requiredEmailPropType = (props: any, propName: any, componentName: any) => {
    const value = props[propName]
    if (value == null || typeof value !== 'string' || !EmailValidator.validate(value)) {
        return new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`)
    }
    return null
}
const emailPropType = (props: any, propName: any, componentName: any) => {
    if (props[propName] == null) {
        return null
    }
    return requiredEmailPropType(props, propName, componentName)
}
emailPropType.isRequired = requiredEmailPropType

export class UserPanel extends Component<UserPanelProps, any> {
    static propTypes: any = {
        email: emailPropType,
        nom: PropTypes.string,
        prenom: PropTypes.string,
    }
    static defaultProps: any = {
        email:  'vasilvestre@laposte.net',
        nom: 'Silvestre',
        prenom: 'Valentin',
    }
    render() {
        const { nom, email, prenom} = this.props
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
