import {  FETCH_SUCCESS, FETCH_ERROR } from '../actions';


export const  initialState = {
    books : [],
    apikey: "AIzaSyCM1LDmWxwNckN6lC7-52XmDDu-02e9PbE",
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log("reducer state = ", state)
    switch(action.type){
        case(FETCH_SUCCESS):
            console.log("action: FETCH_SUCCESS ction.payload", action.payload)
            return({
            ...state,
            books: action.payload,
            });
        case(FETCH_ERROR):
            return({
            ...state,
            books:[],
            error: action.payload
            })
        default:
            return state
    }
}