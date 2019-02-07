import React from 'react';
import { connect } from 'react-redux'

class Stack extends React.Component{
    render() {
        return (
            <div className='stack'>
                <h3>Stack:</h3>
                {
                                    //copy the array and reverse the order
                                        // *using just reverse threw a bug and reversed 'stated' stack
                    this.props.stack.slice().reverse().map(item => 
                        <div>{item}</div>
                    )
                }
            </div>
        );
    }
}

//required function for Redux:
function mapStateToProps(state) {
    // please give me just the 'stack' property from the store:
    return {
        stack: state.stack
    };
}

// connect the Redux Store to  Stack Comoponent:
export default connect(mapStateToProps)(Stack);