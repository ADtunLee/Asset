import APICaller from '../Utils/APICaller'
import * as Config from '../Constants/Config'
import * as Types from '../Constants/ActionType'
export const SearchByKeywordRequest = (keyword) => {
    return dispatch => {
        return APICaller(
            `search?key=${keyword}&limit=${Config.LIMIT_SEARCH_RESULT}`,
            'GET',
            {}
        ).then(result=>{
            console.log(result)
            SearchByKeyword(result.data)
        })
    }
}
export const SearchByKeyword = (data) =>{
    return {
        type : Types.HOME_SEARCH,
        data:data
    }
}