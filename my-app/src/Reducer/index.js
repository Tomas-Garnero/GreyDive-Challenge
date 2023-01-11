const initialState = {
    form: {},
    allForms: []
}

function rootReducer (state = initialState, action) {

    switch(action.type) {

        case "POST_FORM":
            return {
                ...state
            }

        case "GET_FORM":
            return {
                ...state,
                allForms: action.payload
            }

        default: 
            return state;
    }
}

export default rootReducer;