import {
    GET_CATEGORIAS_SUCCESS,
    GET_CATEGORIAS_FAIL,
    GET_OBRAS_POR_CATEGORIA_SUCCESS,
    GET_OBRAS_POR_CATEGORIA_FAIL,
} from './types';

import axios from 'axios';

export const get_categorias = (api) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/${api}/categorias/`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_CATEGORIAS_SUCCESS,
                payload: res.data
            })
            console.log("res de documentos: ",res.data)
        }else {
            dispatch({
                type: GET_CATEGORIAS_FAIL,
            })
        }

    }catch(err) {
        dispatch({
            type: GET_CATEGORIAS_FAIL,
        });
        console.log("error la intentar obtener las categorias: ", err)
    }
}


export const get_obras_por_categoria = (api, categoria) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/${api}/por_categoria/${categoria}/`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_OBRAS_POR_CATEGORIA_SUCCESS,
                payload: res.data
            })
            console.log("res de documentos: ",res.data)
        }else {
            dispatch({
                type: GET_OBRAS_POR_CATEGORIA_FAIL,
            })
        }

    }catch(err) {
        dispatch({
            type: GET_OBRAS_POR_CATEGORIA_FAIL,
        });
        console.log("error la intentar obtener las obras por categoria: ", err)
    }
}

