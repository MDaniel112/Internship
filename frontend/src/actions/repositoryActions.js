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
        Axios.get(url, {headers: {'x-access-token': sessionStorage.getItem('accessToken')}})
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
        Axios({
                method: "post",
                url: url,
                data: obj,
                headers: {"Content-type": "application/json", 'x-access-token': sessionStorage.getItem('accessToken')},
            })
                .then(response => dispatch(postDataSuccess(response)))
                .catch(error => console.log(error));
        // Axios.post(url, obj)
        // .then(response => {
        //     dispatch(postDataSuccess(response));
        // })
        // .catch(error => {
        //     console.log(error)
        // })
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
        Axios({
            method: "put",
            url: url,
            data: obj,
            headers: {"Content-type": "application/json", 'x-access-token': sessionStorage.getItem('accessToken')},
        })
            .then(response => dispatch(putDataSuccess(response)))
            .catch(error => console.log(error));
        // Axios.put(url, obj)
        // .then(response => {
        //     dispatch(putDataSuccess(response));
        // })
        // .catch(error => {
        //     console.log(error)
        // })
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
        Axios.delete(url, {headers: {'x-access-token': sessionStorage.getItem('accessToken')}})
        .then(response => {
            dispatch(deleteDataSuccess(response));
            window.location.reload()
        })
        .catch(error => {
            console.log(error)
            render(<ErrorModal errorText = "Eroare la stergere!"/>)
        })
    }
}

const postUserRegisterDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}
export const postUserRegisterData = (url, obj, props) => {
    return (dispatch) => {
        Axios({
                method: "post",
                url: url,
                data: obj,
                headers: {"Content-type": "application/json"},
            })
                .then(response => {window.location.replace("/"); dispatch(postUserRegisterDataSuccess(response));})
                .catch(error => console.log(error));
    }
}

const postUserLoginDataSuccess = (response) => {
    return {
        type: actionTypes.POST_DATA_SUCCESS,
        response: response
    }
}
export const postUserLoginData = (url, obj, props) => {
    return (dispatch) => {
        Axios({
                method: "post",
                url: url,
                data: obj,
                headers: {"Content-type": "application/json"},
            })
                .then(response => { 
                    dispatch(postUserLoginDataSuccess(response)); 
                    sessionStorage.setItem('isLoggedIn', 'logged'); 
                    sessionStorage.setItem('username', response.data.username);
                    sessionStorage.setItem('accessToken', response.data.accessToken);
                    console.log(sessionStorage.getItem("isLoggedIn")); 
                    window.location.replace("/");  })
                .catch(error => alert('Username sau parola invalide!'));
    }
}