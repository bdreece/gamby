/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['**/*.gotmpl', '**/*.svelte', '**/*.ts'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
