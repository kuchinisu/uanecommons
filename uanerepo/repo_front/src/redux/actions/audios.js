import axios from "axios";
import { 
    GET_AUDIOS_SUCCESS,
    GET_AUDIOS_FAIL,
    GET_AUDIO_SUCCESS,
    GET_AUDIO_FAIL,
} from "./types";


export const get_audio_slug = (slug) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
        try {
            
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/audio/audio/${slug}/`, config)
            if(res.status === 200) {
                dispatch({
                    type: GET_AUDIO_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type:GET_AUDIO_FAIL
                });
            } 

        } catch(err) {
            dispatch({
                type:GET_AUDIO_FAIL
            });
            console.log("error al intentar obtener la imagen destacada", err);
        
    }   
}
export const get_lista_de_audios = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
        try {
            
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/audio/lista_de_audios/`, config)
            if(res.status === 200) {
                dispatch({
                    type: GET_AUDIOS_SUCCESS,
                    payload: res.data,
                });
            } else {
                dispatch({
                    type:GET_AUDIOS_FAIL
                });
            } 

        } catch(err) {
            dispatch({
                type:GET_AUDIOS_FAIL
            });
            console.log("error al intentar obtener la imagen destacada", err);
        
    }   
}
