import { combineReducers } from 'redux';
import WalletsReducer from './WalletsReducer';
import CreateWalletReducer from './CreateWalletReducer';

export default combineReducers({
    wallets: WalletsReducer,
    createWalletForm: CreateWalletReducer
});