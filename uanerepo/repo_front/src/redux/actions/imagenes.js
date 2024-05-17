import {
    GET_IMAGENES_SUCCESS,
    GET_IMAGENES_FAIL,
    GET_IMAGEN_DESTACADA_SUCCESS,
    GET_IMAGEN_DESTACADA_FAIL,
    GET_IMAGEN_SUCCESS,
    GET_IMAGEN_FAIL,
    IMAGEN_SUBIDA_SUCCESS,
    IMAGEN_SUBIDA_FAIL,
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
            
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/img/imagen_destacada/`, config)
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

export const get_imagen = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
        try {
            
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/img/imagen/${slug}/`, config)
            if(res.status === 200) {
                dispatch({
                    type: GET_IMAGEN_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type:GET_IMAGEN_FAIL
                });
            } 

        } catch(err) {
            dispatch({
                type:GET_IMAGEN_FAIL
            });
            console.log("error al intentar obtener la imagen", err);
        }
};
  
export const get_imagenes = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
        try {
            
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/img/lista_de_imagenes/`, config)
            if(res.status === 200) {
                dispatch({
                    type: GET_IMAGENES_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type:GET_IMAGENES_FAIL
                });
            } 

        } catch(err) {
            dispatch({
                type:GET_IMAGENES_FAIL
            });
            console.log("error al intentar obtener la imagenes", err);
        }
};
  
export const post_image = (api, imagen, nombre, subtitulo, descripcion, categoria, licencia, aclaracionDeLicencia) => async dispatch => {

    const formData = new FormData();

    formData.append('imagen', imagen);
    formData.append('nombre', nombre);
    formData.append('subtitulo', subtitulo);
    formData.append('descripcion', descripcion);
    formData.append('categoria', categoria);
    formData.append('licencia', licencia);
    formData.append('aclaracionDeLicencia', aclaracionDeLicencia);

    if(localStorage.getItem('access'))
    {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',

            }
        };

        try {
                
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/${api}/subir/`, formData, config)
            if(res.status === 201) {
                dispatch({
                    type: IMAGEN_SUBIDA_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type:IMAGEN_SUBIDA_FAIL
                });
            } 

        } catch(err) {
            dispatch({
                type:IMAGEN_SUBIDA_FAIL
            });
            console.log("error al intentar subir la imagen:", err);
        }
    }
    
};
