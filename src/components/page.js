import React from 'react'

import Table from './Table'
import Teams from './Teams'

class Page extends React.Component {
    constructor() {
        super()


        this.state = {
            teams: {
                0: {
                    name: 'BB',
                    score: 0,
                    id: 0,
                    color: 'red',
                    won: ["he"]
                },
                1: {
                    name: 'Ragars',
                    score: 0,
                    id: 1,
                    color: 'green',
                    won: []

                },
                2: {
                    name: 'Bently',
                    score: 0,
                    id: 2,
                    color: 'blue',
                    won: []

                }
            }
        }

    }

    handleSelectClick = (teamId, valueId) => {
        console.log(this.state.teams[teamId].won)
        var element = document.getElementById(valueId)
        var score = element.innerText.replace("$", "")
        var selectedElement = document.getElementById(teamId + valueId)



        //check id team has already won
        if (this.state.teams[teamId].won.includes(valueId)) {
            return
        }

        //check of other teams has won
        var otherTeamsIds = Object.keys(this.state.teams).filter(value => value != teamId)

        otherTeamsIds.forEach(id => {
            if (this.state.teams[id].won.includes(valueId)) {
                var newScore = this.state.teams[id].score - parseInt(score)
                console.log("newScore", newScore)
                var newStateTeams = this.state.teams
                newStateTeams[id].score = newScore
                newStateTeams[id].won = newStateTeams[id].won.filter(value => value != valueId)
                this.setState({ teams: newStateTeams })
                var selectedElement = document.getElementById(id + valueId)

                selectedElement.classList.remove("test")

                return
            }
        })



        var oldState = this.state.teams[teamId]
        oldState.score = parseInt(oldState.score) + parseInt(score)
        var oldStatesTeams = this.state.teams
        oldStatesTeams[teamId] = oldState
        var newStateTeams = oldStatesTeams
        newStateTeams[teamId].won.push(valueId)
        selectedElement.classList.add("test")
        this.setState({ teams: newStateTeams })



    }

    handleScore = () => {
        console.log()
    }

    render() {
        return (
            <div>
                <Teams teams={this.state.teams} />
                <Table handleClick={this.handleSelectClick} teams={this.state.teams}> </Table>
            </div>
        )
    }
}


export default Page