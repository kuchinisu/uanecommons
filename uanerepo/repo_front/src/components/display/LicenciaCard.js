import { Licencias } from "./Licencias"
export const LicenciaCard = ({elemento})=>{
    return(
        <div className="p-4 bg-gray-100 rounded-lg shadow-md mt-4">
            <h2 className="font-serif text-2xl mb-2">Licencia</h2>
            <div className="divider mb-4"></div>
            <div className="border border-yellow-400 p-4 rounded-lg bg-white">
                {elemento.licencia === " " || elemento.licencia === "" ? (
                    <div className="space-y-2">
                        <p className="font-semibold">Eres libre de:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Compartir</li>
                            <li>Mezclar</li>
                        </ul>
                        <p className="font-semibold mt-2">Bajo las siguientes condiciones:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Atribución</li>
                            <li>Compartir bajo la misma licencia</li>
                        </ul>
                    </div>
                ) : (
                    <div className="space-y-2">
                        {Licencias(elemento.licencia)}
                    </div>
                )}
            </div>
        </div>
    )
}