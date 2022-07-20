export const reducer = (state, action) => {

    switch(action.type){
        case "cleanState": {
            return {
                loggedInUser: ""
            }
        }
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        default: return state
    }
}