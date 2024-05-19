import JSZip from 'jszip';

export const descargarDatos = (api, elemento) => {
    const zip = new JSZip();

    const json = { 
        nombre: elemento.nombre,
        etiqueta: elemento.subtitulo,
        descripcion: elemento.descripcion,
        autor: elemento.autor,
        categoria: elemento.categoria,
        destacado: elemento.destacado,
        licencia: elemento.licencia,
        fecha_de_suibido: elemento.fecha_de_suibido,
        slug: elemento.slug
    };
    zip.file('info.json', JSON.stringify(json));

    let fileUrl;
    let fileName;
    let fileExtension;

    switch(api) {
        case "img":
            fileUrl = `${process.env.REACT_APP_API_URL}${elemento.img}`;
            fileName = elemento.nombre;
            fileExtension = 'jpg';
            break;
        case 'doc':
            fileUrl = `${process.env.REACT_APP_API_URL}${elemento.doc}`;
            fileName = elemento.nombre;
            fileExtension = 'pdf';
            break;
        default:
            return;
    }
    fetch(fileUrl)
        .then(response => response.blob())
        .then(blob => {
            zip.file(`${fileName}.${fileExtension}`, blob, { binary: true });
            return zip.generateAsync({ type: 'blob' });
        })
        .then(zipBlob => {
            const url = window.URL.createObjectURL(zipBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${fileName}.zip`;
            a.click();
            window.URL.revokeObjectURL(url);
        });
};
