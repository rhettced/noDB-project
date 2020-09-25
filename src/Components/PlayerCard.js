
import React, { Component } from 'react';
import Buttons from './Buttons'

class PlayerCard extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
        }
    }

    nextButton = () => {
        if (this.state.index + 1 === this.props.tryOutDataFn.length) {
            this.setState({ index: 0 });
        } else {
            this.setState({ index: this.state.index + 1 });
        }
    }
    previousButton = () => {
        if (this.state.index === 0) {
            this.setState({ index: this.props.tryOutDataFn.length - 1 });
        } else {
            this.setState({ index: this.state.index - 1 });
        }
    }


    indexMinus = ()=>{
        if(this.state.index > 0){
            this.setState({index: this.state.index-1}) 
        }
        this.props.cutFromTeamFn(this.props.tryOutDataFn[this.state.index].id)
    }

    render() {

        //const {name} = this.props.tryOutDataFn
        if (!this.props.tryOutDataFn[this.state.index]) {
            return null
            //console.log(this.props.tryOutDataFn.name)
        }
        const { name, age, image, college,} = this.props.tryOutDataFn[this.state.index];
        //console.log(this.props.tryOutDataFn[this.state.index].name);

      

        console.log(this.state);
        console.log(this.props);
        return (
            <section className='border'>
                <div className='card-info'>
                    <span>
                        {/* <li>Player ID: {id} </li> */}
                        <li>Name: {name} </li>
                        <li>Age: {age}  </li>
                        <li>College: {college} </li>
                    </span>
                    <img src={image} alt='player' />
                </div>
                <Buttons nextButtonFn={this.nextButton}
                         previousButtonFn={this.previousButton}
                         addToTeamFn={() => this.props.addToTeamFn(this.state.index)}
                         cutFromTeamFn={this.indexMinus}/>
            </section>
        );

    }

}

export default PlayerCard;