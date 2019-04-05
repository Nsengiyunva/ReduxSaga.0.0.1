
const initialState = {
    fetching: false,
    dog: null,
    error: null
};
export function reducer ( state = initialState , action ){
    switch( action.type ) {
        case 'API_CALL_REQUEST':
            return { ...state, fetching: true, error:null };
        break;
        case 'API_CALL_SUCCESS':
            return { ...state, dog: action.dog, fetching: false };
        break;
        case 'API_CALL_ERROR':
            return { ...state,fetching: false, error: action.error }
        break;
        default:
            return state;
    }
}

