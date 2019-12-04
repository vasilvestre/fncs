import React from 'react';
import ReactDOM from 'react-dom';
import {UserPanel} from "./UserPanel";

ReactDOM.render(React.createElement(UserPanel, { email: 'vasilvestre@laposte.net' }), document.getElementById('root'));
