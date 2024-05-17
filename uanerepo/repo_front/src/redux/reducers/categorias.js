import {
    GET_CATEGORIAS_SUCCESS,
    GET_CATEGORIAS_FAIL,
} from '../actions/types';

const initialState = {
    lista_de_categorias: null
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

        default:
            return state
    }
}