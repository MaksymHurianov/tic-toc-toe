import React from 'react'
import './box.css'

const Box = (props) => {
    return (
        <button className="square" onClick={props.onClick}>{props.value}</button>
    )
}

export default Box
