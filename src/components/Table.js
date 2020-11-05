import React from 'react'
import styled from 'styled-components'

const Cell = styled.div`
border: 2px solid white !important;
color:white;
text-align: center;
background-color: #007bff;
padding: 0;
padding-top: 15px;
font-size: 25px;
`

const Category = styled.input`
background-color: #2b76b7;
color: #f4e371;
text-align: center;
width: 150px;
padding: 5px 10px;
font-size: 20px;

`



const createCol = (title, props) => {
    return (
        <div className="row flex-column m-0">
            <Category defaultValue={title} className="col border category">
            </Category>
            <Cell id={`${title}100`} className="col border" onClick={() => props.func(`${title}100`)}>
            $200
            {
                props.func(`${title}100`)
            }
            </Cell>
            <Cell id={`${title}200`} className="col border" onClick={() => props.func(`${title}200`)}>
                $200
            </Cell>
            <Cell id={`${title}300`} className="col border" onClick={() => props.func(`${title}300`)}>
                $300
            </Cell>
            <Cell id={`${title}400`} className="col border" onClick={() => props.func(`${title}400`)}>
                $400
             </Cell>
            <Cell id={`${title}500`} className="col border" onClick={() => props.func(`${title}500`)}>
                $500
            </Cell>

        </div>
    )
}


const Table = (props) => {


    return (
        <div style={{ border: "1px solid white" }} className="Table d-flex justify-content-center  align-items-center">

            {

                createCol('Film', props)


            }

            {

                createCol('Sport', props)


            }
        </div>

    )

}

export default Table
