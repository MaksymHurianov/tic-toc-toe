import React from 'react'
import './board.css'
import Box from "../box/Box";



const Board = ({squares, click}) => {
    return (
        <div className="board">
            {
                squares.map((square, i) => (
                    <Box key={i} value={square} onClick={() => click(i)} />
                ))
            }
        </div>
    );
}

export default Board