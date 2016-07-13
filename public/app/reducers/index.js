import { combineReducers } from 'redux'
import items from './item/index'
import filter from './filter/index'
const rootReducer = combineReducers({
    items,
    filter
});
export default rootReducer
