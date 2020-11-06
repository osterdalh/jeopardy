import React from 'react'
import styled from 'styled-components'
import './Table.css'

const Cell = styled.div`
border: 2px solid white !important;
color:white;
text-align: center;
background-color: #007bff;
padding: 0;
padding-top: 15px;
font-size: 25px;
width:100%;

`

const Category = styled.input`
background-color: #2b76b7;
color: #f4e371;
text-align: center;
width: 150px;
padding: 5px 10px;
font-size: 30px;
width:100%;
border: 2px solid white !important;

`
const SelectTeam = styled.div`
cursor: pointer;
    opacity:0.6;
    width:30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid white;
    transition: border-radius, border, 0.7s;
    &:hover {
        opacity:1 !important;
        border-radius: 0!important;
        border: 2px solid white;
    }

`






class Table extends React.Component {
    constructor(props) {
        super()

        this.state = {
            categories: ["Sport", "Music", "Color", "Film", "Food & Drinks"]
        }
    }


    render() {
        const { teams, handleClick } = this.props
        const teamIdArray = Object.keys(teams)
        const categories = this.state.categories;
        return (
            <div className="tableContainer">
                <div className="d-flex justify-content-center m-0 ">
                    {
                        categories.map((category, i) => {
                            return (
                                <div>
                                    <Category id={category} defaultValue={category} onChange={(event) => {
                                        var newCat = categories
                                        newCat[i] = event.target.value
                                        this.setState({ categories: newCat })
                                    }} className=" border category">
                                    </Category>

                                    <Cell onMouseOver={() => {
                                    }}>
                                        <span id={category + 100}>100$</span>
                                        <div className=" d-flex justify-content-around pb-2">
                                            {

                                                teamIdArray.map(teamId => {

                                                    return (


                                                        <SelectTeam  id={teamId + category + 100} onClick={() => handleClick(teamId, category + 100)}  key={teamId} color={teams[teamId].color}>

                                                        </SelectTeam>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Cell>
                                    <Cell>
                                        <span id={category + 200}>200$</span>
                                        <div className=" d-flex justify-content-around pb-2">
                                            {

                                                teamIdArray.map(teamId => {

                                                    return (


                                                        <SelectTeam id={teamId + category + 200} onClick={() => handleClick(teamId, category + 200)}  key={teamId} color={teams[teamId].color}>

                                                        </SelectTeam>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Cell>
                                    <Cell>
                                        <span id={category + 300}>300$</span>
                                        <div className=" d-flex justify-content-around pb-2">
                                            {

                                                teamIdArray.map(teamId => {

                                                    return (


                                                        <SelectTeam id={teamId + category + 300} onClick={() => handleClick(teamId, category + 300)}  key={teamId} color={teams[teamId].color}>

                                                        </SelectTeam>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Cell>
                                    <Cell>
                                        <span id={category + 400}>400$</span>
                                        <div className=" d-flex justify-content-around pb-2">
                                            {

                                                teamIdArray.map(teamId => {

                                                    return (


                                                        <SelectTeam id={teamId + category + 400} onClick={() => handleClick(teamId, category + 400)}  key={teamId} color={teams[teamId].color}>

                                                        </SelectTeam>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Cell>
                                    <Cell>
                                        <span id={category + 500}>500$</span>
                                        <div className=" d-flex justify-content-around pb-2">
                                            {

                                                teamIdArray.map(teamId => {

                                                    return (


                                                        <SelectTeam id={teamId + category + 500} onClick={() => handleClick(teamId, category + 500)}  key={teamId} color={teams[teamId].color}>

                                                        </SelectTeam>
                                                    )
                                                })

                                            }
                                        </div>
                                    </Cell>

                                </div>

                            )
                        })
                    }



                </div>
            </div>


        )

    }


}

export default Table
