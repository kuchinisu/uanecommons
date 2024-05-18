export const Licencias = (licencia) => {
    switch (licencia) {
        case "CC BY":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Eres libre de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Mezclar, editar y modificar</li>
                        <li>Compartir y distribuir dentro de trabajos propios o por sí mismo</li>
                    </ul>
                    <h2 className="font-serif text-xl">Bajo las condiciones de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Atribución al autor original</li>
                    </ul>
                </div>
            );
        case "CC BY-SA":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-SA</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Eres libre de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Mezclar, editar y modificar</li>
                        <li>Compartir y distribuir dentro de trabajos propios o por sí mismo</li>
                    </ul>
                    <h2 className="font-serif text-xl">Bajo las condiciones de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Atribución al autor original</li>
                        <li>Compartir bajo la misma licencia</li>
                    </ul>
                </div>
            );
        case "CC BY-ND":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-ND</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Eres libre de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Compartir y distribuir</li>
                    </ul>
                    <h2 className="font-serif text-xl">Bajo las condiciones de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Atribución al autor original</li>
                        <li>Usar en su forma original, sin modificaciones, mezclas, ediciones ni ningún otro cambio</li>
                        <li>Cualquier uso debe ser idéntico al original</li>
                    </ul>
                </div>
            );
        case "CC BY-NC":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-NC</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Eres libre de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Compartir y distribuir</li>
                        <li>Modificar, mezclar o editar</li>
                    </ul>
                    <h2 className="font-serif text-xl">Bajo las condiciones de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Atribución al autor original</li>
                        <li>No usar con fines comerciales</li>
                    </ul>
                </div>
            );
        case "CC BY-NC-SA":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-NC-SA</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Eres libre de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Compartir y distribuir</li>
                        <li>Modificar, mezclar o editar</li>
                    </ul>
                    <h2 className="font-serif text-xl">Bajo las condiciones de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Atribución al autor original</li>
                        <li>No usar con fines comerciales</li>
                        <li>Compartir bajo la misma licencia</li>
                    </ul>
                </div>
            );
        case "CC BY-NC-ND":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC BY-NC-ND</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Eres libre de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Compartir y distribuir</li>
                    </ul>
                    <h2 className="font-serif text-xl">Bajo las condiciones de:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Atribución al autor original</li>
                        <li>Usar en su forma original, sin modificaciones, mezclas, ediciones ni ningún otro cambio</li>
                        <li>Cualquier uso debe ser idéntico al original</li>
                        <li>No usar con fines comerciales</li>
                    </ul>
                </div>
            );
        case "CC0":
            return (
                <div>
                    <p className="font-serif font-bold text-3xl">CC0</p>
                    <div className="divider"></div>
                    <h2 className="font-serif text-xl">Yo, el autor de la obra, renuncio a:</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Cualquier derecho sobre la obra, dejándola en el dominio público</li>
                    </ul>
                </div>
            );
        default:
            return (
                <div></div>
            );
    }
}
