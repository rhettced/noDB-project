
import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import PlayerCard from './Components/PlayerCard'
import DisplayTeam from './Components/DisplayTeam'

class App extends Component {
  constructor() {
    super();
    this.state = {
      tryOutData: [],
      team: []
    }
  }
  componentDidMount() {
    this.updateTryOutData();
  }

  updateTryOutData = () => {
    Axios.get('/api/tryOutData')
      .then(res => {
        //console.log(res);
        this.setState({ tryOutData: res.data })
      })
      .catch(err => console.log(err));
  }

  updateTeam = () => {
    Axios.get('/api/team')
      .then(res => {
        //console.log(res.data);
        this.setState({ team: res.data });
      })
      .catch(err => console.log(err));
  }

  addToTeam = (index) => {
    Axios.post('/api/team', { player: this.state.tryOutData[index] })
      .then(res => {
        this.setState({ team: res.data })
      })
      .catch(err => console.log(err));
      //this.cutFromTeam(this.state.tryOutData[index])
  }

  cutFromTeam = (id) => {
    Axios.delete(`/api/tryOutData/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({tryOutData: res.data});
      })
      .catch(err => console.log(err));
  }

 editName = (id,nickname) => {

    Axios.put(`/api/team/${id}`,{name: nickname})
    .then(res =>{
      this.setState({team: res.data})
    })
    .catch(err => console.log(err));
 }

  render() {

    return (
      <div className="App">
        <Header />
        <PlayerCard tryOutDataFn={this.state.tryOutData}
                    addToTeamFn={this.addToTeam} 
                    cutFromTeamFn={this.cutFromTeam}/>
        <DisplayTeam updateTeamFn={this.updateTeam}
                     team={this.state.team} 
                     editNameFn={this.editName}/>
      </div>
    );

  }

}

export default App;
