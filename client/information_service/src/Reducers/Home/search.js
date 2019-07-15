import * as types from '../../Constants/ActionType'
var data = JSON.parse(localStorage.getItem('SearchList'))
 var initialState ={
    NowSearchString: '',
    ListSearchString: []
}
const search = (state = initialState, action) => {

    switch (action.type) {
        case types.HOME_SEARCH:
           
            if (action.data) {
                var newState = {
                    NowSearchString: action.keyword,
                    ListSearchString: action.data
                }
                state = newState
                //localStorage.setItem('SearchList', JSON.stringify(state))
            }
            return state

        case types.HOME_INPUT_SEARCH:
            if (action.keyword && action.keyword !== '') {
                state.ListSearchString.push(action.keyword);
                state.NowSearchString = action.keyword;
            }
            return state
        default: return state;
    }
}

export default search;
