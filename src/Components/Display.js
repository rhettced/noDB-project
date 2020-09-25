import React, { Component } from 'react';

export default class Display extends Component {
    constructor() {
        super();
        this.state = {
            toggle: true,
            nicknameInput: ''
        }
    }

    changeToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    }

    inputChange = (val) => {
        this.setState({ nicknameInput: val });
    }



    render() {
        return (
            <section className='team-display'>
                {this.state.toggle ? <button onClick={this.changeToggle}>Nickname</button> :
                    <form onSubmit={(e)=> {
                        e.preventDefault();
                        this.changeToggle();
                        this.props.editNameFn(this.props.id, this.state.nicknameInput)
                        console.log(this.state.nicknameInput)
                        console.log(this.props.id);

                    }}>
                        <input
                            onChange={(e) => this.inputChange(e.target.value)}
                        />
                    </form>}

                <ul> Name: {this.props.name}</ul>
                <ul> Age: {this.props.age}</ul>
                <ul> College: {this.props.college}</ul>
                <img src={this.props.image} alt='player' />
            </section>

        );
    }

}