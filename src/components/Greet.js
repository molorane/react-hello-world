import React from 'react'


//function Greet(){
//   return <h1>Hello Nomfundo</h1>
//}

const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name} also {props.heroName}</h1>
            {props.children}
        </div>
    )
}
export default Greet;