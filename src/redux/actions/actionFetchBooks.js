import {
    FETCH_BOOKS_LOADING,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_ERROR
} from "../constants";

import axios from 'axios';


export const fetchBooksLoading = () => {
    return {
        type: FETCH_BOOKS_LOADING
    }
}

export const fetchBooksSuccess = data => {
    return {
        type: FETCH_BOOKS_SUCCESS,
        payload: data
    }
}

export const fetchBooksError = error => {
    return {
        type: FETCH_BOOKS_ERROR,
        payload: error
    }
}

const GOOGLE_API_KEY = 'AIzaSyA3DuH1b2ectPY_J3kuwQ0P9R2ti59CrjU';

export const fetchBooks = title => {

    return dispatch => {

        dispatch(fetchBooksLoading())

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${GOOGLE_API_KEY}&maxResults=20`)
            .then( res => {
                const bookDataArray = res.data.items;
               dispatch(fetchBooksSuccess(bookDataArray))
            })
            .catch(error => {
               dispatch(fetchBooksError(error.message))
            })
        ;
    }
}

