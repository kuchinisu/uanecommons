import {
    GET_CATEGORIAS_SUCCESS,
    GET_CATEGORIAS_FAIL,
    GET_OBRAS_POR_CATEGORIA_SUCCESS,
    GET_OBRAS_POR_CATEGORIA_FAIL,
} from '../actions/types';

const initialState = {
    lista_de_categorias: null,
    lista_de_obras: null,
};

export default function categorias(state=initialState, action){
    const{type, payload} = action;

    switch(type){
        case GET_CATEGORIAS_SUCCESS:
            return {
                ...state,
                lista_de_categorias: payload.results.categorias
                ,
            }
        case GET_CATEGORIAS_FAIL:
            return {
            ...state,
            lista_de_categorias: null,
        }        
        case GET_OBRAS_POR_CATEGORIA_SUCCESS:
            return {
                ...state,
                lista_de_obras: payload.results.por_categoria
            }
        case GET_OBRAS_POR_CATEGORIA_FAIL:
            return {
                ...state,
                lista_de_obras: null
            }

        default:
            return state
    }
}