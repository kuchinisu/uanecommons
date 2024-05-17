import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { post_image } from "../../../redux/actions/imagenes";
import { get_categorias } from "../../../redux/actions/categorias";

function Formulario({ postImage }) {

    const [api, setApi] = useState(0);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(get_categorias(api))
    },[api])

    const [formData, setFormData] = useState({
        api:"",
        imagen: null,
        nombre: "",
        subtitulo: "",
        descripcion: "",
        categoria: "",
        licencia: "",
        aclaracionDeLicencia: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = e => {
        setFormData({
            ...formData,
            imagen: e.target.files[0]
        });
    };

    const handleTipoFileChange = e => {
        setApi(e.target.value);

        setFormData({
            ...formData,
            api: e.target.value
        });

        console.log('valor actual de api: ', e.target.value);
    }

    const handleSubmit = () => {
        const {api, imagen, nombre, subtitulo, descripcion, categoria, licencia, aclaracionDeLicencia } = formData;
        postImage(api,imagen, nombre, subtitulo, descripcion, categoria, licencia, aclaracionDeLicencia); // Enviar los datos del formulario a la acción
        console.log("aclaraciones: ", aclaracionDeLicencia)
    };

    return (
        <div className="max-w-2xl mx-auto p-5 bg-white shadow-md rounded-lg">
    <select onChange={handleTipoFileChange} className="select select-primary w-full mb-4">
        <option disabled selected>Tipo de archivo</option>
        <option>img</option>
        <option>audio</option>
        <option>doc</option>
    </select>

    <div className="mb-5">
        <input type="file" name="imagen" onChange={handleImageChange} className="file-input file-input-bordered file-input-primary w-full" />
    </div>

    <div className="grid gap-4">
        <div className="mb-4">
            <input type="text" name="nombre" onChange={handleChange} value={formData.nombre} placeholder="Nombre" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
            <div className="font-serif">Crea una breve etiquetado o descripcion sobre que es el dato.</div>
            <input type="text" name="subtitulo" onChange={handleChange} value={formData.subtitulo} placeholder="Etiqueta" className="input input-bordered w-full" />
            <div className="divider"></div>
        </div>
        <div className="mb-4">
            <div className="font-serif">Da una descripcion detallada, ¿cual es el contexto?, ¿que ocurre?</div>
            <textarea name="descripcion" onChange={handleChange} value={formData.descripcion} placeholder="Descripción" className="textarea textarea-primary w-full"></textarea>
            <div className="divider"></div>
        </div>

        <div className="mb-4"> 
            <input type="text" name="categoria" onChange={handleChange} value={formData.categoria} placeholder="Categoría" className="input input-bordered w-full" />
            <div className="divider"></div>
        </div>

        <div className="mb-4 bg-gray-100 p-4 rounded-lg">
            <div className="mb-2 font-semibold">Licencia</div>
            <select name="licencia" onChange={handleChange} value={formData.licencia} className="select select-primary w-full">
                <option disabled selected>Licencias de uso</option>
                <option>CC BY</option>
                <option>CC BY-SA</option>
                <option>CC BY-ND</option>
                <option>CC BY-NC</option>
                <option>CC BY-NC-SA</option>
                <option>CC BY-NC-ND</option>
                <option>CC0</option>
                <option>PD</option>
                <option>GFDL</option>
            </select>
        </div>

        <div className="mb-4">
            <div className="font-serif">Especificaciones y condiciones detalladas para su uso.</div>
            <input type="text" name="aclaracionDeLicencia" onChange={handleChange} value={formData.aclaracionDeLicencia} placeholder="Aclaración de Licencia" className="input input-bordered w-full" />
        </div>
        <div className="divider"></div>
        <div className="text-center">
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar</button>
        </div>
    </div>
</div>

    );
}

const mapDispatchToProps = dispatch => ({
    postImage: (api, imagen, nombre, subtitulo, descripcion, categoria, licencia, aclaracionDeLicencia) => dispatch(post_image(api, imagen, nombre, subtitulo, descripcion, categoria, licencia, aclaracionDeLicencia))
});

const mapStateToProps = state =>({

})

export default connect(null, mapDispatchToProps)(Formulario);
