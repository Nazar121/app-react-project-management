const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
    },
  },
};
