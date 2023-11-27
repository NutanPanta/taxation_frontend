module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    ['@babel/transform-runtime'],
    'macros',
    [
      'babel-plugin-direct-import',
      { modules: ['@mui/material', '@mui/icons-material'] },
    ],
  ],
};
