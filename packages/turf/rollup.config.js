import babel from 'rollup-plugin-babel';
import node from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default [{
    input: 'index.js',
    extend: true,
    output: {
        file: 'turf.mjs',
        format: 'es',
    },
    plugins: [node()]
},{
    input: 'index.js',
    extend: true,
    output: {
        file: 'turf.js',
        format: 'cjs',
    },
    plugins: [node(), babel()]
},
{
    input: 'index.js',
    extend: true,
    output: {
        file: 'turf.min.js',
        format: 'umd',
        name: 'turf'
    },
    plugins: [node(), babel(), uglify()]
}];