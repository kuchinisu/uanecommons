import {
    GET_ARTICULOS_SUCCESS,
    GET_ARTICULOS_FAIL,
    GET_ARTICULO_DESTACADO_SUCCESS,
    GET_ARTICULO_DESTACADO_FAIL,
} from '../actions/types';

const initialState = {
    articulo_destacado: null,
    lista_de_articulos: null,
};

export default function articulos(state=initialState, action){
    const{type, payload} = action;

    switch(type){
        case GET_ARTICULOS_SUCCESS:
            return {
                ...state,
                lista_de_articulos: payload.results.articulos
                ,
            }
        case GET_ARTICULOS_FAIL:
            return {
            ...state,
            lista_de_articulos: null,
        }
        case GET_ARTICULO_DESTACADO_SUCCESS:
            return {
                ...state,
                articulo_destacado: payload.results.articulo_destacado,
            }
        case GET_ARTICULO_DESTACADO_FAIL:
            return {
                ...state,
                articulo_destacado: null,
            }
        

        default:
            return state
    }
}