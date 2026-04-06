const FileSystem = require('./fileSystem');
const path = require('path');

function generateProject(structure, config) {
    const fs = new FileSystem();
    const basePath = path.join(process.cwd(), 'app');

    // Crear carpeta app/
    fs.crearCarpeta(basePath);

    // Según estructura
    if (structure === 'flat') {
        fs.crearCarpeta(path.join(basePath, 'apis'));
        fs.crearCarpeta(path.join(basePath, 'componentes'));
        fs.crearCarpeta(path.join(basePath, 'utilidades'));
        fs.crearCarpeta(path.join(basePath, 'hooks'));
        fs.crearCarpeta(path.join(basePath, 'paginas'));
    }

    // Crear index.js en cada carpeta
    fs.crearArchivo(path.join(basePath, 'index.js'), '// App index');
}

module.exports = generateProject;