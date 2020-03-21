export const change = () =>({
    type: 'CHANGE'
})

export const changeReducer = (state={change: true}, action)=>{
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                change: !state.change
            }
        default:
            return state;
    }
}