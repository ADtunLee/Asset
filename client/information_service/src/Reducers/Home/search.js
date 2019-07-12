import * as types from '../../Constants/ActionType'
var data = JSON.parse(localStorage.getItem('SearchList'))
var initialState = data ? data : []
const search = (state = initialState, action) => {
    switch (action.type) {
        case types.HOME_SEARCH:
            if (action.keyword) {
                state.push(action.keyword);
                localStorage.setItem('SearchList', JSON.stringify(state))
            }
            return state
        default: return state;
    }
}

export default search;
