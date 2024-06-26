import {
    GET_IMAGEN_DESTACADA_SUCCESS,
    GET_IMAGEN_DESTACADA_FAIL,
    GET_IMAGENES_SUCCESS,
    GET_IMAGENES_FAIL,
    GET_IMAGEN_SUCCESS,
} from '../actions/types';

const initialState = {
    imagen_destacada: null,
    lista_de_imagenes: null,
    imagen: null,
};

export default function imagenes(state=initialState, action) {
    const{type, payload} = action;

    switch(type) {
        case GET_IMAGENES_SUCCESS:
            return{
                ...state,
                lista_de_imagenes: payload.results.imagenes
            };
        case GET_IMAGENES_FAIL:
            return {
                ...state,
                lista_de_imagenes: null
            }
        case GET_IMAGEN_DESTACADA_SUCCESS:
            return {
                ...state,
                imagen_destacada: payload.results.imagen
            }
        case GET_IMAGEN_DESTACADA_FAIL:
            return {
                ...state,
                imagen_destacada: null
            };
        case GET_IMAGEN_SUCCESS:
            return {
                ...state,
                imagen: payload.results.imagen_slug
            }
        
        default:
            return state
    }
};
