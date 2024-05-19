export const Tabla = ({elemento}) => {
    return(
        <table className="table border border-info">
            <tbody>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700 bg-careers">Nombre:</td>
                    <td className="px-4 py-2">{elemento.nombre}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Etiqueta:</td>
                    <td className="px-4 py-2">{elemento.subtitulo}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Descripción:</td>
                    <td className="px-4 py-2">{elemento.descripcion}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Autor:</td>
                    <td className="px-4 py-2">{elemento.autor}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Categoría:</td>
                    <td className="px-4 py-2">{elemento.categoria}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Destacado:</td>
                    <td className="px-4 py-2">{elemento.destacado ? "Sí" : "No"}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Público:</td>
                    <td className="px-4 py-2">{elemento.publico ? "Sí" : "No"}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Licencia:</td>
                    <td className="px-4 py-2">{elemento.licencia}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Fecha de Subida:</td>
                    <td className="px-4 py-2">{elemento.fecha_de_suibido}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Slug:</td>
                    <td className="px-4 py-2">{elemento.slug}</td>
                </tr>
            </tbody>
        </table>
    )
}