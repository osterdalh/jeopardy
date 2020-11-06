import React from 'react'


import styled from 'styled-components'

const TeamInput = styled.input`
    border: none;
    background: transparent;
    outline: none;
    padding: 10px;
    min-width: 30px !important;
    width: fit-content;
    color:white;
    text-align: center;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border: 1px solid black;
    background-color: ${props => props.color};
`

const TeamScore = styled.div`
    background-color: white;
    color: black;
    text-align: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`

const TeamScoreBoxConainer = styled.div`
    padding: 10px;
    width: 50px;
    width: fit-content;

`



class Teams extends React.Component {

    constructor(props) {
        super()


    }









    render() {
        const { teams } = this.props
        return (
            <div className="mb-5">
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        {
                            Object.keys(teams).map(teamId => {

                                return (

                                    <TeamScoreBoxConainer key={teamId}>
                                        <TeamInput color={teams[teamId].color} defaultValue={teams[teamId].name}></TeamInput>
                                        <TeamScore> {teams[teamId].score}</TeamScore>
                                    </TeamScoreBoxConainer>

                                )
                            })

                        }




                    </div>
                </div>
            </div>

        )
    }

}

export default Teams