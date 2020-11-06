import React from 'react'


import styled from 'styled-components'
import Table from './Table'

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

const SelectTeam = styled.div`
height: 30px;
width: ${props => `${props.width}%;`};
display: inline-block;
background-color: green;
`

class Teams extends React.Component {

    constructor() {
        super()
        this.teamColors = ["red", "green", "yellow"]

        this.state = {
            teams: {
                0: {
                    name: 'BB',
                    points: 32,
                    id: 0,
                    color: 'red'
                },
                1: {
                    name: 'Ragars',
                    points: 0,
                    id: 1,
                    color: 'green'
                },
                2: {
                    name: 'Bently',
                    points: 0,
                    id: 2,
                    color: 'blue'
                }
            }
        }
    }



    handleTeamChange = (e, i) => {
        let teams = [...this.state.teams]
        teams.i.name = e.target.value
        this.setState({ teams })

    }

    renderTeamBox = (index) => {

        return (
            <TeamInput style={{ backgroundColor: this.state.teams[index].color }} value={this.state.teams[index].name} onChange={e => this.handleTeamChange(e, index)} >

            </TeamInput>
        )
    }

    renderTeamScoreBox = (index) => {
        return (
            <TeamScoreBoxConainer>
                {this.renderTeamBox(index)}
                <TeamScore>
                    {this.state.teams[index].points}
                </TeamScore>
            </TeamScoreBoxConainer>
        )
    }

    addScore = (id, score) => {
        var oldStateTeams = this.state.teams

        
        console.log("state", oldStateTeams[id])
        console.log("score", score)
        console.log("old", parseInt(oldStateTeams[id].points))

        var updatedTeamScore = parseInt(oldStateTeams[id].points) + parseInt(score)
        oldStateTeams[id].points = updatedTeamScore
        console.log("oldState", updatedTeamScore)

        this.setState({ teams: oldStateTeams })

    }

    changeColor = (id) => {
        var element = document.getElementById(id)
        // element.style.backgroundColor = "red"
        var score = element ? (element.innerText.replace('$', '')) : 0

        return (

            <div style={{ border: "1px solid black", height: "30px", zIndex: "99" }}>
                {
                    Object.keys(this.state.teams).map(teamId => {
                        return (
                            <SelectTeam key={teamId} width={(1 / Object.keys(this.state.teams).length
                            ) * 100} style={{ backgroundColor: this.state.teams[teamId].color }} onClick={() => this.addScore(teamId, score)}></SelectTeam>
                        )
                    })
                }
            </div>

        )

    }



    render() {
        return (
            <div>
                <div className="d-flex justify-content-end">
                    <div className="d-flex justify-content-center">
                        {
                            Object.keys(this.state.teams).map((team, index) => this.renderTeamScoreBox(index))
                        }

                    </div>

                </div>
                <Table func={this.changeColor} />

            </div>

        )
    }

}

export default Teams