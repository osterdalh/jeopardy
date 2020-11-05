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
width: ${props => `${props.width}%;`}
display: inline-block;
background-color: green;
`

class Teams extends React.Component {

    constructor() {
        super()
        this.teamColors = ["red", "green", "yellow"]

        this.state = {
            teams: [{
                name: 'BB',
                points: 0,
                id: 1,
                color: 'red'
            },
            {
                name: 'BB',
                points: 0,
                id: 2,
                color: 'yellow  '
            },
            {
                name: 'Rollet',
                points: 0,
                id: 3,
                color: 'green'

            }]
        }
    }



    handleTeamChange = (e, i) => {
        let teams = [...this.state.teams]
        teams[i].name = e.target.value
        this.setState({ teams })

    }

    renderTeamBox = (index) => {
        return (
            <TeamInput style={{ backgroundColor: this.teamColors[index] }} value={this.state.teams[index].name} onChange={e => this.handleTeamChange(e, index)} >

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

    changeColor = (id) => {
        var element = document.getElementById(id)
        // element.style.backgroundColor = "red"
        // var score = (element.innerText.replace('$', ''))
        return (

            <div style={{border: "1px solid black", height: "30px"}}>
                {
                    this.state.teams.map(team => {
                        return(
                            <SelectTeam width={(1/this.state.teams.length)*100} style={{backgroundColor:team.color}} onClick={() => console.log(team.id)}></SelectTeam>
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
                            this.state.teams.map((team, index) => this.renderTeamScoreBox(index))
                        }

                    </div>

                </div>
                <Table func={this.changeColor} />

            </div>

        )
    }

}

export default Teams