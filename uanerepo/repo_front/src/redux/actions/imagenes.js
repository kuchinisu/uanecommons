import {
    GET_IMAGENES_SUCCESS,
    GET_IMAGENES_FAIL,
    GET_IMAGEN_DESTACADA_SUCCESS,
    GET_IMAGEN_DESTACADA_FAIL,
} from './types';

import axios from 'axios';


export const get_imagen_destacada = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
        try {
            
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/img/imagen_destacada`, config)
            if(res.status === 200) {
                dispatch({
                    type: GET_IMAGEN_DESTACADA_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type:GET_IMAGEN_DESTACADA_FAIL
                });
            } 

        } catch(err) {
            dispatch({
                type:GET_IMAGEN_DESTACADA_FAIL
            });
            console.log("error al intentar obtener la imagen destacada", err);
        }

   
}
