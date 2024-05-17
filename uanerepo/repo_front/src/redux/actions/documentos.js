import {
    GET_DOCUMENTOS_SUCCESS,
    GET_DOCUMENTOS_FAIL,
    GET_DOCUMENTO_DESTACADO_SUCCESS,
    GET_DOCUMENTO_DESTACADO_FAIL,
    GET_DOCUMENTO_SUCCESS,
    GET_DOCUMENTO_FAIL,
} from './types';

import axios from 'axios';

export const get_documento_destacado = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/doc/documento_destacado/`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_DOCUMENTO_DESTACADO_SUCCESS,
                payload: res.data
            })
            console.log("res de documentos: ",res.data)
        }else {
            dispatch({
                type: GET_DOCUMENTO_DESTACADO_FAIL,
            })
        }

    }catch(err) {
        dispatch({
            type: GET_DOCUMENTO_DESTACADO_FAIL,
        });
        console.log("error la intentar obtener el documento destacado: ", err)
    }
};

export const get_documento_slug = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/doc/documento/${slug}/`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_DOCUMENTO_SUCCESS,
                payload: res.data
            })
            console.log("res de documentos: ",res.data)
        }else {
            dispatch({
                type: GET_DOCUMENTO_FAIL,
            })
        }

    }catch(err) {
        dispatch({
            type: GET_DOCUMENTO_FAIL,
        });
        console.log("error la intentar obtener el documento destacado: ", err)
    }
};


export const get_lista_de_documentos = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/doc/lista_de_documentos/`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_DOCUMENTOS_SUCCESS,
                payload: res.data
            })
            console.log("res de documentos: ",res.data)
        }else {
            dispatch({
                type: GET_DOCUMENTOS_FAIL,
            })
        }

    }catch(err) {
        dispatch({
            type: GET_DOCUMENTOS_FAIL,
        });
        console.log("error la intentar obtener los documentos: ", err)
    }
};

