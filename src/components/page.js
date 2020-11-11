import React from 'react'

import Table from './Table'
import Teams from './Teams'

class Page extends React.Component {
    constructor() {
        super()

        this.colors = ['red', 'green', 'blue', 'orange', 'purple', 'DeepPink']
        this.state = {
            teams: {
                0: {
                    name: 'Team 1',
                    score: 0,
                    id: 0,
                    color: 'red',
                    won: [],
                    imageWon: false
                },
                1: {
                    name: 'Team 2',
                    score: 0,
                    id: 1,
                    color: 'green',
                    won: [],
                    imageWon: false
                },
                2: {
                    name: 'Team 3',
                    score: 0,
                    id: 2,
                    color: 'blue',
                    won: [],
                    imageWon: false
                }

            }
        }

    }

    toggleOp = (cell) => {
        cell.style.opacity = "0.45"
    }

    handleImagePoints = (teamId, elementId) => {
        var element = document.getElementById(elementId)

        //if team has already won
        if (!this.state.teams[teamId].imageWon) {
            element.classList.add("test")
            var newPointsTeam = this.state.teams
            newPointsTeam[teamId].imageWon = true
            newPointsTeam[teamId].score = newPointsTeam[teamId].score + 500
            this.setState({teams: newPointsTeam})

            return
        } else {
            var newPointsTeam = this.state.teams
            newPointsTeam[teamId].imageWon = false
            newPointsTeam[teamId].score = newPointsTeam[teamId].score - 500
            this.setState({teams: newPointsTeam})
            element.classList.remove("test")
            return
        }


        //if other team already won

    }

    handleSelectClick = (teamId, valueId) => {
        var element = document.getElementById(valueId)
        var score = element.innerText.replace("$", "")
        var selectedElement = document.getElementById(teamId + valueId)
        this.toggleOp(element.parentElement)


        //check id team has already won
        if (this.state.teams[teamId].won.includes(valueId)) {
            return
        }

        //check of other teams has won
        var otherTeamsIds = Object.keys(this.state.teams).filter(value => value !== teamId)

        otherTeamsIds.forEach(id => {
            if (this.state.teams[id].won.includes(valueId)) {
                var newScore = this.state.teams[id].score - parseInt(score)
                console.log("newScore", newScore)
                var newStateTeams = this.state.teams
                newStateTeams[id].score = newScore
                newStateTeams[id].won = newStateTeams[id].won.filter(value => value !== valueId)
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

    removeTeam = () => {
        var teams = this.state.teams
        var keys = Object.keys(teams)
        var lastKey = keys[keys.length - 1]

        delete teams[lastKey];
        this.setState({ teams })

    }
    addTeam = () => {
        var teams = this.state.teams
        var keys = Object.keys(teams)
        var lastKey = keys[keys.length - 1]
        var newKey = parseInt(lastKey) + 1

        if (!newKey) {
            newKey = 0
        }

        teams[newKey] = {
            name: `Team ${newKey + 1}`,
            score: 0,
            id: newKey,
            color: this.colors[newKey],
            won: [],
            imageWon: false
        }

        this.setState({ teams })



    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center">

                    <i className="fas fa-minus-circle" onClick={() => this.removeTeam()}></i>
                    <Teams teams={this.state.teams} />
                    <i className="fas fa-plus-circle" onClick={() => this.addTeam()}></i>
                </div>

                <Table handleClick={this.handleSelectClick} handleImagePoints={this.handleImagePoints} teams={this.state.teams}> </Table>
            </div>
        )
    }
}


export default Page