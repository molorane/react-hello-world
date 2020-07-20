import React from 'react'

const Hello = () => {

    /*return (
        <di>
            <h1>Hello Nomfundo</h1>
        </di>
    )*/

    return React.createElement('div', 
                                    {id: 'hello', className:"dummyClass"},
                                    React.createElement('h1', null, 'Hello Nomfundo'));
}

export default Hello;