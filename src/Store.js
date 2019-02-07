import { createStore } from 'redux';

/* drawing out data structure; using rpn(reverse polish notation) calculator structure
{
    currentInput: 1234.5,
    //data user input before
    stack: [
        10,
        20,
    ]
}
*/

function reducer(store, action) {
    if(!store){
        return {
            currentInput: 0,
            stack: []
        };
    }

    if (action.type === 'setCurrentInput'){
        return{
            ...store,
            currentInput: action.value
        };
    }
    
    if(action.type === 'pushToStack'){
        // take the currentInput and push it on to stack
        // also set the currentInput back to 0
        return {
            currentInput: 0,
            stack:[
                ...store.stack,
                store.currentInput
            ]
        };
    }

    if(action.type === 'add'){
        // take the top two things on the stack add them, then push 
        // the answer back onto the stack
        const answer = 
            store.stack[store.stack.length - 1] + 
            store.stack[store.stack.length - 2];

            //debugger;
        
        return{
            ...store,
            stack: [
                ...store.stack.slice(0, store.stack.length - 2),
                answer
            ]
        }
    }


    if(action.type === 'add'){
        // take the top two things on the stack add them, then push 
        // the answer back onto the stack
        const answer = 
            store.stack[store.stack.length - 1] + 
            store.stack[store.stack.length - 2];

            //debugger;
        
        return{
            ...store,
            stack: [
                ...store.stack.slice(0, store.stack.length - 2),
                answer
            ]
        }
    }
    
}
               //createStore is getting 'function' data type as reducer
const reduxStore = createStore(reducer);
console.log('intial redux store', reduxStore);
export default reduxStore;
// export default createStore(reducer);