import './App.scss';

import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: props.initialValue
        };
    }

    changeValue = (addValue) => {
        if((addValue < 0 && this.state.value > 0) || (addValue > 0 && this.state.value < this.props.maxValue)){
            this.setState((prevState) => ({
                value: prevState.value + addValue
            }));
        }
    }

    render(){
        return(
            <div className="two-cols">
                <label htmlFor={this.props.name} className="form-label">{this.props.label}</label>
                    
                <button
                    type="button"
                    className="button change-button"
                    onClick={() => this.changeValue(this.props.step * -1)}>-</button>

                <input
                    type="number"
                    id={this.props.name}
                    name={this.props.name}
                    min="0"
                    max={this.props.maxValue}
                    className="input"
                    value={this.state.value}
                    step={this.props.step}
                    onChange={(e) => {this.setState({value: e.target.value})}} />
                
                <button
                    type="button"
                    className="button change-button"
                    onClick={() => this.changeValue(this.props.step)}>+</button>
            </div>
        );
    }
}

class Checkbox extends React.Component{
    render(){
        return(
            <div>
                <label>
                    <input type="checkbox" name={this.props.name} className="check" />
                    <span className="form-label">{this.props.label}</span>
                </label>
            </div>
        );
    }
}

function App() {
    return (
        <div className={"container"}>
            <form className={"tracker-form"}>
                <Input
                    label={"Turns"}
                    name={"turns"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"Fusions"}
                    name={"fusions"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"Defensive wins"}
                    name={"defensive-wins"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"Effective attacks"}
                    name={"effective-attacks"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"Traps activated"}
                    name={"traps-activated"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"Pure magics used"}
                    name={"magics-used"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"Equipments used"}
                    name={"equipments-used"}
                    step={1}
                    maxValue={99}
                    initialValue={0}
                />

                <Input
                    label={"LP"}
                    name={"lifepoints"}
                    step={100}
                    maxValue={8000}
                    initialValue={8000}
                />

                <Checkbox
                    label={"Played a card facedown"}
                    name={"played-facedown"}
                />

                <Checkbox
                    label={"Has 3 or less cards left in deck"}
                    name={"cards-left"}
                />

                <div className="button-holder">
                    <button type="button" className="button" onClick={() => { window.location.reload(); }}>Reset all</button>
                </div>
            </form>
        </div>
    );
}

export default App;