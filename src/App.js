import './App.scss';

import React from 'react';
import calcRank from './calcRank';

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
                value: parseInt(prevState.value) + parseInt(addValue)
            }));

            setTimeout(() => {
                const rank = calcRank();
                this.props.change(rank);
            }, 1);
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });

        const rank = calcRank();
        this.props.change(rank);
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
                    onChange={this.handleChange} />
                
                <button
                    type="button"
                    className="button change-button"
                    onClick={() => this.changeValue(this.props.step)}>+</button>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            rank: {
                name: "S-POW",
                value: 99,
				class: "pow"
            }
        };
    }

    handleRank = (rank) => {
        this.setState({ rank: rank });
    }

    render(){
        return (
            <div className={"container"}>
                <form className={"tracker-form"}>
					<Input
                        label={"Turns"}
                        name={"turns"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Fusions"}
                        name={"fusions"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Effective attacks"}
                        name={"effective-attacks"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Defensive wins"}
                        name={"defensive-wins"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Pure magics used"}
                        name={"magics-used"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Equipments used"}
                        name={"equipments-used"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Traps activated"}
                        name={"traps-activated"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"LP"}
                        name={"lifepoints"}
                        step={10}
                        maxValue={8000}
                        initialValue={8000}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Cards used"}
                        name={"cards-used"}
                        step={1}
                        maxValue={40}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <Input
                        label={"Facedown cards"}
                        name={"facedown-cards"}
                        step={1}
                        maxValue={99}
                        initialValue={0}
                        change={this.handleRank}
                    />
    
                    <div className={"form-foot"}>
                        <div className={"rank"}>
							Rank: {this.state.rank.value} / <span className={this.state.rank.class}>{this.state.rank.name}</span>
						</div>
    
                        <div className={"button-holder"}>
                            <button
                                type={"button"}
                                className={"button"}
                                onClick={() => { window.location.reload(); }}
                            >Reset all</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default App;