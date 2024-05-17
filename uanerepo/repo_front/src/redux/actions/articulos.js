import axios from 'axios';
import { GET_ARTICULOS_FAIL, GET_ARTICULOS_SUCCESS, GET_ARTICULO_DESTACADO_FAIL, GET_ARTICULO_DESTACADO_SUCCESS } from './types';

export const get_articulo_destacado = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        };
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/articulos/articulo_destacado/`, config)
        
        if (res.status === 200) {
            dispatch({
                type: GET_ARTICULO_DESTACADO_SUCCESS,
                payload: res.data
            })
            console.log("res de documentos: ", res.data)
        }else {
            dispatch({
                type: GET_ARTICULO_DESTACADO_FAIL,
            })
        }

    }catch(err) {
        dispatch({
            type: GET_ARTICULO_DESTACADO_FAIL,
        });
        console.log("error la intentar obtener el articulo destacado: ", err)
    }
}

