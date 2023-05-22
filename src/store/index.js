import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)    // Create a data storage (store) with the reducer
export default store //Export the store to make it available for other components to use