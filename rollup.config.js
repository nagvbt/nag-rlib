import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from '@rollup/plugin-json';
import pkg from './package.json';
import scss from 'rollup-plugin-scss';

const extensions = ['.js', '.jsx'];

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [
    resolve({
      extensions,
      modulesOnly: true
    }),
    json({
      compact: true
    }),
    commonjs(),
    external(),
    scss(),
    babel({
      exclude: 'node_modules/**'
    }),
    del({ targets: ['dist/*'] })
  ],
  external: Object.keys(pkg.peerDependencies || {})
};
