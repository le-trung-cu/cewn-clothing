const userReducer = (state={currentUser: null}, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.currentUser
            }
        default:
            return state;
    }
}
export default  userReducer;