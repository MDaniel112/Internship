import * as actionTypes from './actionsTypes.js';
import Axios from 'axios';
import ErrorModal from '../Components/error_modal';
import { render } from '@testing-library/react';

const getDataSuccess = (data) => {
    return {
        type: actionTypes.GET_DATA_SUCCESS,
        data: data
    }
}
export const getData = (url, props) => {
    return (dispatch) => {
        Axios.get(url)
        .then(response => {
            dispatch(getDataSuccess(response.data));
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const postDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}
export const postData = (url, obj, props) => {
    return (dispatch) => {
        Axios.post(url, obj)
        .then(response => {
            dispatch(postDataSuccess(response));
        })
        .catch(error => {
            console.log(error)
        })
    }
}
const putDataSuccess = (response) => {
    return {
        type: actionTypes.PUT_DATA_SUCCESS,
        response: response
    }
}
export const putData = (url, obj, props) => {
    return (dispatch) => {
        Axios.put(url, obj)
        .then(response => {
            dispatch(putDataSuccess(response));
        })
        .catch(error => {
            console.log(error)
        })
    }
}
const deleteDataSuccess = (response) => {
    return {
        type: actionTypes.DELETE_DATA_SUCCESS,
        response: response
    }
}
export const deleteData = (url, props) => {
    return (dispatch) => {
        Axios.delete(url)
        .then(response => {
            dispatch(deleteDataSuccess(response));
        })
        .catch(error => {
            console.log(error)
            render(<ErrorModal errorText = "Eroare la stergerea proiectului!"/>)
        })
    }
}