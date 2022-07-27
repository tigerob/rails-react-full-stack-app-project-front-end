export const reducer = (state, action) => {

    switch(action.type){
        case "cleanState": {
            return {
                loggedInUser: "",
                bookingsList: []
            }
        }
        case "setLoggedInUser": {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setToken": {
            return {
                ...state,
                token: action.data
            }
        }
        case "setBookingsList": {
            return {
                ...state,
                bookingsList: action.data
            }
        }
        case "addBooking": {
            return {
                ...state,
                bookingsList: [action.data, ...state.bookingsList]
            }
        }
        default: return state
    }
}