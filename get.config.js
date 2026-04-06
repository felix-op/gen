
module.exports = {
  // Ruta base del proyecto React
  basePath: 'src',

  // Estructura del proyecto: 'flat' | 'shared' | 'modular'
  // flat: proyecto/apis, componentes, hooks, etc
  // shared: proyecto/shared/apis, shared/componentes, etc
  // modular: proyecto/modulos/app1/componentes, app1/hooks, etc
  structure: 'modular',

  // Generar archivos de estilos por defecto
  generateStyles: true,

  // Tipo de estilos: 'css' | 'scss' | 'tailwind' | 'none'
  styleType: 'css',

  // Ruta del archivo Router (para actualizar rutas automáticamente)
  routerPath: 'src/Router.js',

  // Ubicación de templates personalizados
  templates: {
    component: './templates/component/Component.jsx',
    page: './templates/page/Page.jsx',
    hook: './templates/hook/Hook.js',
    module: './templates/module/index.js'
  },

  // Convenciones de nombres
  naming: {
    componentCase: 'PascalCase', // PascalCase para componentes
    hookCase: 'camelCase',       // camelCase para hooks
    fileCase: 'PascalCase'       // PascalCase para nombres de archivo
  },

  // Archivos/carpetas a ignorar
  ignore: [
    'node_modules',
    '.git',
    'dist',
    'build'
  ]
};