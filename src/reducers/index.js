import { combineReducers } from 'redux';
import WalletsReducer from './WalletsReducer';

export default combineReducers({
    wallets: WalletsReducer
});