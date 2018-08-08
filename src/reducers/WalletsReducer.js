import FETCH_WALLETS from './type';

const INITAL_STATE={}

export default (state = INITAL_STATE, action) => {
    return {...state, wallets: data};
    
}

const data = [{ id: 1, name:"test1", currency: "EU" }, { id: 2, name:"test2", currency: "US" }, { id: 3,name:"test3", currency: "UA" }];