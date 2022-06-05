// 참고: https://react-svgr.com/docs/options/
const svgrOptions = {
  titleProp: true,
  icon: true,
  svgProps: {
    height: 'auto',
  },
  memo: true,
  jsxImportSource: {
    source: '@emotion/react',
    specifiers: ['jsx'],
  },
};

// 참고: https://github.com/platypusrex/next-plugin-svgr#fileloader
const fileLoaderOptions = {
  limit: 16384,
  name(resourcePath, resourceQuery) {
    if (process.env.NODE_ENV === 'development') {
      return '[path][name].[ext]';
    }
    return '[contenthash].[ext]';
  },
};

module.exports = { svgrOptions, fileLoaderOptions };
