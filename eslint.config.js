import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import hooksPlugin from 'eslint-plugin-react-hooks'
import refreshPlugin from 'eslint-plugin-react-refresh'

export default tseslint.config(
    // Configuraciones globales
    {
        ignores: ['dist', 'eslint.config.js'], // Ignora el directorio de build y este mismo archivo
    },

    // Configuraciones base de JavaScript y TypeScript
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // Configuración específica para archivos React (TSX)
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            react: reactPlugin,
            'react-hooks': hooksPlugin,
            'react-refresh': refreshPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        settings:{
            react:{
                version:'detect',
            },
        },

        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactPlugin.configs['jsx-runtime'].rules, // Para el nuevo JSX Transform de React 17+
            ...hooksPlugin.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            'react/prop-types': 'off', // No es necesario con TypeScript
        },
    }
)
