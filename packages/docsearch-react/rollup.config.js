import { plugins } from '../../rollup.base.config';
import { createRollupConfigs } from '../../scripts/config';

import pkg from './package.json';

const config = {
  external: ['react', 'react-dom'],
  output: {
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    file: 'dist/umd/index.js',
  },
  plugins,
};

export default createRollupConfigs({ pkg, config });
