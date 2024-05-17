import  { combineReducers } from 'redux';
import Auth from './auth';
import imagenes from './imagenes';
import documentos from './documentos';
import articulos from './articulos';
import categorias from './categorias';
import audios from './audios';


export default combineReducers({
    Auth,
    imagenes,
    documentos,
    articulos,
    categorias,
    audios,
    
})