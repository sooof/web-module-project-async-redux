export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (books)=> {
    console.log("action: fetchSuccess ", books)
    return({type: FETCH_SUCCESS, payload:books});
}

export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}