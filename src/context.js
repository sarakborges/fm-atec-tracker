import './App.scss';

import React from "react";
import calcRank from './calcRank';

const TrackerContext = React.createContext({});
const TrackerProvider = TrackerContext.Provider;
const TrackerConsumer = TrackerContext.Consumer;

export class Form extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			rank: {
                name: "S-POW",
                value: 99,
				class: "pow"
            },

			values: {
				turns: 0,
				fusions: 0,
				effectiveAttacks: 0,
				defensiveWins: 0,
				magicsUsed: 0,
				equipmentsUsed: 0,
				trapsActivated: 0,
				lifepoints: 8000,
				cardsUsed: 0,
				facedownCards: 0
			}
		}
	}

	resetStates = () => {
		this.setState({
			values: {
				turns: 0,
				fusions: 0,
				effectiveAttacks: 0,
				defensiveWins: 0,
				magicsUsed: 0,
				equipmentsUsed: 0,
				trapsActivated: 0,
				lifepoints: 8000,
				cardsUsed: 0,
				facedownCards: 0
			}
		});

		setTimeout(() => {
			this.setState({ rank: calcRank(this.state.values) });
		}, 1);
	}

  	render() {
    	return (
			<div className={"container"}>
				<form className={"tracker-form"} noValidate>
					<TrackerProvider value={this}>
						<Input
							label={"Turns"}
							name={"turns"}
							step={1}
						/>
		
						<Input
							label={"Fusions"}
							name={"fusions"}
							step={1}
						/>
		
						<Input
							label={"Effective attacks"}
							name={"effectiveAttacks"}
							step={1}
						/>
		
						<Input
							label={"Defensive wins"}
							name={"defensiveWins"}
							step={1}
						/>
		
						<Input
							label={"Pure magics used"}
							name={"magicsUsed"}
							step={1}
						/>
		
						<Input
							label={"Equipments used"}
							name={"equipmentsUsed"}
							step={1}
						/>
		
						<Input
							label={"Traps activated"}
							name={"trapsActivated"}
							step={1}
						/>
		
						<Input
							label={"LP"}
							name={"lifepoints"}
							step={10}
						/>
		
						<Input
							label={"Cards used"}
							name={"cardsUsed"}
							step={1}
						/>
		
						<Input
							label={"Facedown cards"}
							name={"facedownCards"}
							step={1}
						/>
					</TrackerProvider>

					<div className={"form-foot"}>
                        <div className={"rank"}>
							Rank: {this.state.rank.value} / <span className={this.state.rank.class}>{this.state.rank.name}</span>
						</div>
    
                        <div className={"button-holder"}>
                            <button
                                type={"button"}
                                className={"button"}
                                onClick={this.resetStates}
                            >Reset all</button>
                        </div>
                    </div>
				</form>
			</div>
    	);
  	}
}

class Input extends React.Component{
	updateValue = (value, context) => {
		if(value < 0)
			value = value * -1;

		context.state.values[this.props.name] = value;

		setTimeout(() => {
			context.setState({ rank: calcRank(context.state.values) });
		}, 1);
	}

	handleChange = (e, context) => {
		this.updateValue(e.target.value, context);
	}

    changeValue = (addValue, context) => {
		const prevValue = context.state.values[this.props.name];
		const value = parseInt(prevValue) + parseInt(addValue);
		if((addValue < 0 && prevValue > 0) || (addValue > 0)){
			this.updateValue(value, context);
        }
    }

	render(){
		return <TrackerConsumer>
			{context =>
			<div className="two-cols">
                <label htmlFor={this.props.name} className="form-label">{this.props.label}</label>
                    
                <button
                    type="button"
                    className="button change-button"
                    onClick={() => this.changeValue(this.props.step * -1, context)}>-</button>

                <input
                    type="number"
                    id={this.props.name}
                    name={this.props.name}
                    min="0"
                    className="input"
                    value={context.state.values[this.props.name]}
                    step={this.props.step}
					onChange={(e) => { this.handleChange(e, context); }} />
                
                <button
                    type="button"
                    className="button change-button"
                    onClick={() => this.changeValue(this.props.step, context)}>+</button>
            </div>
			}
		</TrackerConsumer>;
	}
};

export default Form;