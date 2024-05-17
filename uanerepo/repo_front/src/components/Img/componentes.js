export const Tabla = (img) => {
    return(
        
        <div className="">
        <table className="table-auto border-collapse w-full">
            <tbody>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Nombre:</td>
                    <td className="px-4 py-2">{img.nombre}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Subtítulo:</td>
                    <td className="px-4 py-2">{img.subtitulo}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Descripción:</td>
                    <td className="px-4 py-2">{img.descripcion}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Autor:</td>
                    <td className="px-4 py-2">{img.autor}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Categoría:</td>
                    <td className="px-4 py-2">{img.categoria}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Destacado:</td>
                    <td className="px-4 py-2">{img.destacado ? "Sí" : "No"}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Público:</td>
                    <td className="px-4 py-2">{img.publico ? "Sí" : "No"}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Licencia:</td>
                    <td className="px-4 py-2">{img.licencia}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Fecha de Subida:</td>
                    <td className="px-4 py-2">{img.fecha_de_suibido}</td>
                </tr>
                <tr>
                    <td className="px-4 py-2 font-semibold text-gray-700">Slug:</td>
                    <td className="px-4 py-2">{img.slug}</td>
                </tr>
            </tbody>
        </table>
    </div>
     
    )
}