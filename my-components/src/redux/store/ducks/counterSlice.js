const initialState = {
    counter1: 0,
    counter2: 0,
    countermessage: "",
}

//action Types
//action type naming: "appName/sliceName/actionName"
export const INCREMENT_1 = "appName/sliceName/INCREMENT_1";
export const DECREMENT_1 = "appName/sliceName/DECREMENT_1";
export const INCREMENT_2 = "appName/sliceName/INCREMENT_2";
export const DECREMENT_2 = "appName/sliceName/DECREMENT_2";

export const ADD_MESSAGE = "appName/sliceName/ADD_MESSAGE";


//reducer(default export)
const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case INCREMENT_1:
            return {
                ...state,
                counter1: state.counter1 + 1
            }
        case DECREMENT_1:
            return {
                ...state,
                counter1: state.counter1 - 1
            }
        case INCREMENT_2:
            return {
                ...state,
                counter2: state.counter2 + 1
            }
        case DECREMENT_2:
            return {
                ...state,
                counter2: state.counter2 - 1
            }
        default:
            return state;
    }
}
export default counterReducer;

//action creators(no data passed)
export const increment_counter1 = () => ({type: INCREMENT_1});
export const decrement_counter1 = () => ({type: DECREMENT_1});
export const increment_counter2 = () => ({type: INCREMENT_2});
export const decrement_counter2 = () => ({type: DECREMENT_2});

//action creators(no data passed)
export const increment_counter1 = (payload) => ({type: INCREMENT_1, payload});

//thunks, ...etc