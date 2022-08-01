export const reducer = (state, action) => {
  switch (action.type) {
    case "cleanState": {
      // clean state
      return {
        loggedInUser: "",
        bookingsList: [],
        userIsAdmin: null,
      };
    }
    case "setLoggedInUser": {
      return {
        ...state,
        loggedInUser: action.data, // action.data is the username
        userIsAdmin: action.data2, // action.admin is the user.is_admin
      };
    }
    case "setToken": {
      return {
        ...state,
        token: action.data, // action.data is the jwt
      };
    }
    case "setBookingsList": {
      return {
        ...state,
        bookingsList: action.data, // action.data is the bookingsList
      };
    }
    case "addBooking": {
      return {
        ...state,
        bookingsList: [action.data, ...state.bookingsList], // action.data is the booking
      };
    }
    default:
      return state; // if no action is matched, return the state
  }
};
