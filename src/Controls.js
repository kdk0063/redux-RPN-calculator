import React from 'react';
import { connect } from 'react-redux';
import NumberInput from './NumberInput';

class Controls extends React.Component{
    addButtonClicked = () =>{
        this.props.add();
    };

    render() {
        return (
            <div className="controls">
                <button onClick={this.addButtonClicked}> + </button>
                {/* 
                <button onClick={this.addButtonClicked}> - </button>
                <button onClick={this.addButtonClicked}> * </button>
                <button onClick={this.addButtonClicked}> / </button> 
                */}
                <NumberInput/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        add: () => dispatch ({type: 'add'})
    }
}
export default connect(null, mapDispatchToProps)(Controls);