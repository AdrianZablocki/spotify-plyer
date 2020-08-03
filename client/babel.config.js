module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      '@babel/preset-typescript',
      [
        '@babel/preset-env',
        {
          modules: 'umd',
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      'emotion',
      [
        'module-resolver',
        {
          alias: {
            src: './src',
          },
          extensions: ['.js', '.ts', '.tsx'],
        },
      ],
    ],
  };
};
