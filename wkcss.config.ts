import config from '@wirunekaewjai/css/config';

export default config({
  packages: [],
  
  sources: [
    {
      directory: 'src',
    },
  ],

  module: {
    inputs: ['.m.ts'],
    output: '.ts',
  },

  build: {
    directory: 'src',
    entries: {},
  },
});