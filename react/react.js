
'use strict';

const e = React.createElement;

class Line extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            output : 'PlaceHolder Output',
            input : '',
            showInput: false
        }

        this.processInput = this.processInput.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.toggleInputBox = this.toggleInputBox.bind(this)
    }

    processInput(input) {
        // write latex thingies here
        this.setState({
            output: input,
            input: input,
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        // this.setState({
        //   [name]: value,
        //   output: value
        // });
        this.processInput(value)
    }

    toggleInputBox(){
        this.setState( prevState => {
            return {showInput: !prevState.showInput}
        })
    }

    

    render(){

        return(
            <div>
                <p>{this.state.output ? this.state.output : 'Click to type something' }</p>
                {this.state.showInput ? 
                <input
                    name="input"
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInputChange} /> : null
                }
                <button onClick = {() => this.toggleInputBox()}>{this.state.showInput? 'Done' : 'Edit'}</button>
            </div>
        )
    }
}


ReactDOM.render(e(Line), document.getElementById('root'));