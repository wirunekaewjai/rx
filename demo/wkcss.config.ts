import config from '@wirunekaewjai/css/config';

export default config({
  packages: [],
  
  sources: [
    {
      directory: 'src',
    },
  ],

  module: {
    inputs: ['.m.js'],
    output: '.js',
  },

  build: {
    directory: 'public/css',
    entries: {
      home: [
        'src/pages/index.tsx'
      ],
    },
  },
});