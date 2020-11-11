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
opacity: 1;
transition: opacity 1s;
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
        super(props)

        this.state = {
            categories: ["Sport", "Music", "Color", "Film", "Food & Drinks"],
            image: null
        }
    }

    addCat = () => {
        var newCat = this.state.categories
        newCat.push('New Category')
        this.setState({ categories: newCat })
    }

    removeCat = () => {
        var newCat = this.state.categories
        newCat.pop()
        this.setState({ categories: newCat })
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({
                image: URL.createObjectURL(img)
            }, () => {
                var imgElement = document.getElementById("imageContainer")
                imgElement.style.backgroundImage = `url(${this.state.image})`
            });

            console.log("sds", this.state.image, URL.createObjectURL(img))
        }
    };



    render() {
        const { teams, handleClick, handleImagePoints } = this.props
        const teamIdArray = Object.keys(teams)
        const categories = this.state.categories;
        return (
            <div >
                <div className="d-flex justify-content-center align-items-center">
                    <i onClick={() => this.removeCat()} class="fas fa-minus-circle"></i>

                    <div className="tableContainer">

                        <div className="d-flex justify-content-center m-0 ">
                            <div id="imageContainer"></div>

                            {
                                categories.map((category, i) => {
                                    return (
                                        <div key={i}>
                                            <Category id={category} value={this.state.categories[i]} onChange={(event) => {
                                                var newCat = categories
                                                newCat[i] = event.target.value
                                                this.setState({ categories: newCat })
                                            }} className="border category">
                                            </Category>


                                            <Cell>
                                                <span id={category + 100}>100$</span>
                                                <div className=" d-flex justify-content-around pb-2">
                                                    {

                                                        teamIdArray.map(teamId => {

                                                            return (


                                                                <SelectTeam id={teamId + category + 100} onClick={() => handleClick(teamId, category + 100)} key={teamId} color={teams[teamId].color}>

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


                                                                <SelectTeam id={teamId + category + 200} onClick={() => handleClick(teamId, category + 200)} key={teamId} color={teams[teamId].color}>

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


                                                                <SelectTeam id={teamId + category + 300} onClick={() => handleClick(teamId, category + 300)} key={teamId} color={teams[teamId].color}>

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


                                                                <SelectTeam id={teamId + category + 400} onClick={() => handleClick(teamId, category + 400)} key={teamId} color={teams[teamId].color}>

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


                                                                <SelectTeam id={teamId + category + 500} onClick={() => handleClick(teamId, category + 500)} key={teamId} color={teams[teamId].color}>

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
                    <i onClick={() => this.addCat()} class="fas fa-plus-circle"></i>
                </div>
                <div className="imageUpload text-center pt-4">
                    {!this.state.image ?
                        <div>
                            <div className="d-flex justify-content-center align-items-center">
                                <h1 className="selectImage">Upload Image &nbsp;</h1><i className="fas fa-arrow-circle-down"></i>
                            </div>
                            <input type="file" name="myImage" onChange={this.onImageChange} />
                        </div>
                        :
                        <div>

                            <div className="d-flex justify-content-center align-items-center">
                                <p className="m-0 selectImage">Image Uploaded &nbsp;</p>
                                <i className="fas fa-check-square"></i>
                            </div>
                            <div className="d-flex justify-content-center">

                                {
                                    teamIdArray.map(teamId => {

                                        return (
                                            <SelectTeam id={`imagePoint${teamId}`} className="m-2" key={teamId} color={teams[teamId].color} onClick={() => handleImagePoints(teamId, `imagePoint${teamId}`)} >

                                            </SelectTeam>



                                        )
                                    })
                                }
                            </div>
                        </div>
                    }

                </div>
            </div>
        )

    }


}

export default Table
