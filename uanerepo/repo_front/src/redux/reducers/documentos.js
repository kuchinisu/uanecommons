import {
    GET_DOCUMENTO_DESTACADO_SUCCESS,
    GET_DOCUMENTO_DESTACADO_FAIL,
    GET_DOCUMENTOS_SUCCESS,
    GET_DOCUMENTOS_FAIL,
    GET_DOCUMENTO_SUCCESS,
    GET_DOCUMENTO_FAIL,
} from '../actions/types';

const initialState = {
    documento_destacado: null,
    lista_de_documentos: null,
    documento:null
};

export default function documentos(state=initialState, action){
    const{type, payload} = action;

    switch(type){
        case GET_DOCUMENTOS_SUCCESS:
            return {
                ...state,
                lista_de_documentos: payload.results.documentos
                ,
            }
        case GET_DOCUMENTOS_FAIL:
            return {
            ...state,
            lista_de_documentos: null,
        }
        case GET_DOCUMENTO_DESTACADO_SUCCESS:
            return {
                ...state,
                documento_destacado: payload.results.documento_destacado,
            }
        case GET_DOCUMENTO_SUCCESS:
            return{
                ...state,
                documento: payload.results.documento
            }
        case GET_DOCUMENTO_FAIL:
            return{
                ...state,
                documento: null
            }
        case GET_DOCUMENTO_DESTACADO_FAIL:
            return {
                ...state,
                documento_destacado: null,
            }
        

        default:
            return state
    }
}