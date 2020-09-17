import { css } from '@emotion/core';

const fontFamily = '\'Open Sans\', Arial, -apple-system, Roboto, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', sans-serif';
const border = '4px solid #626262';

export default css`
  html {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    font-family: ${fontFamily};
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
  /* overwrite carousel styles */
  .slider,
  .slide-current,
  .slider-frame,
  .slider-control-centerright button,
  .slider-control-centerleft button {
    &:focus {
      outline: none;
    }
  } 
`;
