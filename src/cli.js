const path = require('path');
const fs = require('fs');
const Logger = require('./utils/logger');
const generateProject = require('./utils/generateProject');

class CLI {
    constructor() {
        this.logger = new Logger();
    }

    run(args) {
        const command = args[0];
        const name = args[1];

        // Validar que exista comando
        if (!command) {
            this.showHelp();
            return;
        }

        // Mapear comando a función
        switch (command) {
            case 'project':

                if (!['flat', 'modular', 'shared'].includes(name)) {
                    this.logger.error('Estructura inválida. Usa: flat, modular, shared');
                    return;
                }

                generateProject(name);
                break;
            case 'module':
                console.log(`Creando módulo: ${name}`);
                break;
            case 'page':
                console.log(`Creando página: ${name}`);
                break;
            case 'component':
                console.log(`Creando componente: ${name}`);
                break;
            case 'hook':
                console.log(`Creando hook: ${name}`);
                break;
            default:
                this.logger.error(`Comando desconocido: ${command}`);
                this.showHelp();
        }
    }

    showHelp() {
        console.log(`
Gen CLI

Comandos:
  gen project [estructura]   - Genera la estructura base del proyecto (flat, modular, shared)
    `);
    }
}

module.exports = CLI;