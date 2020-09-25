import React, {Component} from 'react';

export default class Buttons extends Component{

    addMemberAndDelete = () =>{
        this.props.addToTeamFn();
        this.props.cutFromTeamFn();
    }


    render(){
        return(
            <section className='buttons'>
                <button onClick={this.props.previousButtonFn}> Previous </button>
                <button onClick={this.props.cutFromTeamFn}> Cut </button>
                <button onClick={this.addMemberAndDelete}> Add to Team </button>
                <button onClick={this.props.nextButtonFn}> Next </button>
            </section>
        );
    }

}