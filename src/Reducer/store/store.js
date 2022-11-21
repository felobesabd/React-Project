import { createStore, applyMiddleware } from 'redux'
import  thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import AllReducer from '../redux/AllReducer';

const middleware = [thunk]

export const store = createStore(AllReducer, 
    composeWithDevTools(applyMiddleware(...middleware)))
    