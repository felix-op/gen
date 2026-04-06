const fs = require('fs');
const path = require('path');

class FileSystem {
    crearCarpeta(ruta) {
        if (!fs.existsSync(ruta)) {
            fs.mkdirSync(ruta, { recursive: true });
        }
    }

    crearArchivo(ruta, contenido) {
        fs.writeFileSync(ruta, contenido, 'utf8');
    }

    leerArchivo(ruta) {
        return fs.readFileSync(ruta, 'utf8');
    }

    existeArchivo(ruta) {
        return fs.existsSync(ruta);
    }

    escribirEnArchivo(ruta, contenido) {
        this.crearArchivo(ruta, contenido);
    }
}

module.exports = FileSystem;