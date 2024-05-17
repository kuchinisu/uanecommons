import {
    GET_AUDIOS_SUCCESS,
    GET_AUDIOS_FAIL,
    GET_AUDIO_SUCCESS,
    GET_AUDIO_FAIL,
} from '../actions/types';

const initialState = {
    lista_de_audios: null,
    audio_slug: null

};

export default function audios(state=initialState, action){
    const{type, payload} = action;

    switch(type){
        case GET_AUDIOS_SUCCESS:
            return {
                ...state,
                lista_de_audios: payload.results.audios
                ,
            }
        case GET_AUDIOS_FAIL:
            return {
            ...state,
            lista_de_audios: null,
        }        

        case GET_AUDIO_SUCCESS:
            return {
                ...state,
                audio_slug: payload.results.audio,
            }
        case GET_AUDIO_FAIL:
            return {
                ...state,
                audio_slug: null
            }

        default:
            return state
    }
};