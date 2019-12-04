import React from 'react';
import PropTypes from 'prop-types';
import EmailValidator from 'email-validator';

/*eslint-disable */
export function UserPanel({email, nom, prenom}) {
    return React.createElement('div', {className: 'row'},
        React.createElement('div', {className: 'col s12 m7'},
            React.createElement('div', {className: 'card'},
                React.createElement('div', {className: 'card-image'},
                    React.createElement('img', {
                        src: "https://www.gravatar.com/avatar/" + md5(email),
                        className: "responsive-img"
                    })
                ),
                React.createElement('div', {className: 'card-content'},
                    React.createElement('p', null, prenom),
                    React.createElement('p', null, nom),
                ),
                React.createElement('div', {className: 'card-action'},
                    React.createElement('p', null, prenom)
                ),
            )
        )
    );
}

const requiredEmailPropType = (props, propName, componentName) => {
    const value = props[propName];
    if (value == null || typeof value !== 'string' || !EmailValidator.validate(value)) {
        return new TypeError(`Invalid Email Prop Value: ${value} for ${propName} in ${componentName}`);
    }
    return null;
};
const emailPropType = (props, propName, componentName) => {
    if (props[propName] == null) {
        return null;
    }
    return requiredEmailPropType(props, propName, componentName);
};
emailPropType.isRequired = requiredEmailPropType;

UserPanel.propTypes = {
    email: emailPropType,
    nom: PropTypes.string,
    prenom: PropTypes.string
};

UserPanel.defaultProps = {
    email: "vasilvestre@laposte.net",
    nom: "Silvestre",
    prenom: "Valentin"
};
