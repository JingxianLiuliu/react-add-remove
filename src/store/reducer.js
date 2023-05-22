const defaultState = {
    inputValue:'Write something',
    List:['']
}
const reducer = (state = defaultState,action)=>{
    // exports a reducer function, which takes the current state and an action as parameters.

    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) // Create a new state by deep copying the current state
        newState.inputValue = action.value   // Update the inputValue property in the new state with the value from the action
        return newState     // Return the updated state
    }

    if(action.type === 'addItem' ){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)  // Add the inputValue to the list array in the new state
        newState.inputValue = ''        //Clear the inputValue property in the new state
        return newState
    }

    if(action.type === 'deleteItem' ){
        let newState = JSON.parse(JSON.stringify(state))    // Create a new state by deep copying the current state
        newState.list.splice(action.index,1)  // Remove an item from the list array in the new state based on the provided index
        newState.inputValue = ''
        return newState
    }
    return state    // If none of the conditions are met, return the current state as is
}
export default reducer;