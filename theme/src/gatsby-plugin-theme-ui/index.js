import merge from 'lodash.merge';
import colors from './colors';
import styles from './styles';
import prism from './prism';

export default merge(
  {},
  {
    initialColorMode: `light`,
    colors,
    fonts: {
      heading: `Montserrat, sans-serif`,
      monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
    },
    fontSizes: [16, 18, 20, 22, 27, 36],
    lineHeights: {
      text: '1.45',
      heading: '1.1',
    },
    sizes: {
      container: 672,
    },
    Header: {
      backgroundColor: 'primary',
      color: 'background',
      fontWeight: 'bold',
      margin: 0,
      span: {
        display: 'block',
        fontSize: 3,
        margin: '0 auto',
        maxWidth: 'container',
        padding: 3,
        width: '90vw',
      },
    },
    Main: {
      margin: '0 auto',
      marginBottom: '50px !important',
      maxWidth: 'container',
      width: '90vw',
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      color: 'text',
      fontSize: 5,
      lineHeight: 'heading',
    },
    styles,
    prism,
  },
);
