export function managePresents(state, action){
    switch(action.type) {
        case 'INCREASE':
            return { ...state,
                numberOfPresents: state.numberOfPresents + 1 
            }
        default:
            return state;
    }
}
let state = {managePresents: 0}

managePresents(state, {type: 'INCREASE'})