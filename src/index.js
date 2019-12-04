import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const name = 'baptiste';
    const welcoming = <p>Bonjour {name}</p>;
    return (
        <>
            {welcoming}
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
