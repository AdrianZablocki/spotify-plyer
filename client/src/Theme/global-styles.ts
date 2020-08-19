import { css } from '@emotion/core';

const fontFamily = `'Open Sans', Arial, -apple-system, Roboto, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif`;

export default css`
  html {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    font-family: ${fontFamily};
    margin: 0;
    overflow-y: scroll;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
