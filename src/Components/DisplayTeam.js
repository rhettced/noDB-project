import React, {Component} from 'react';
import Axios from 'axios';
import Display from './Display';

export default class DisplayTeam extends Component{
    constructor(){
        super();
        this.state = {
            filterInput: ''
        }

    }

        changeFilterInput = (val) =>{
            this.setState({filterInput: val})
        }

    componentDidMount(){
        console.log('Hiiii')
        this.props.updateTeamFn();
    }

    
    render(){
         let filterTeam = this.props.team.filter((el, ind) => el.name.includes(this.state.filterInput)).map((el,ind) => {
            return <Display key={ind} name={el.name} age={el.age} college={el.college} image={el.image} id= {el.id}
                    editNameFn={this.props.editNameFn}/> 
            });

        let mappedTeam = this.props.team

        return(
            <section className='display-team'>
                <h1>Team Elevate </h1>
                <input placeholder='Search for Player'
                    onChange={(e) =>this.changeFilterInput(e.target.value)}/>
                {filterTeam}
            </section>
        );
    }
}