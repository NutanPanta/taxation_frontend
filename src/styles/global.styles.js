import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
// hooks
import { useSettings } from '@hooks/index';

// ----------------------------------------------------------------------

const GlobalStyles = createGlobalStyle`
    html,body,#root {
    min-height: 100vh;
    }
    main {
        position: relative;
    }
    body,button {
        -webkit-font-feature-settings: "lnum";
        -moz-font-feature-settings: "lnum";
        font-feature-settings: "lnum";

    }
    .leaflet-container {
        width: 440px;
        height: 403px;
    }
    .slick-track {
        max-width: 4156px !important;
    }
    .slick-prev, .slick-next {
        &::before {
            background-color: initial !important;
            color: initial !important;
        }
     
    }
    a {
        cursor: pointer;
        text-decoration: none;
        color:inherit;
    }
    ul {
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li {
        box-sizing: border-box;
        list-style: none;
    }
    img {
        max-width: 100%;
        border-width: 0;
        vertical-align: middle;
    }
    .react-tel-input .form-control  {
        width:100% !important;
        border: none !important;
    }
    .react-tel-input .country-list {
        width: max-content;
    }
    .react-tel-input .flag-dropdown.open {
        z-index: 11 !important;
    }
    input,textarea {
        cursor: auto !important;
    }
    input:autofill {
        box-shadow: none !important;
    }
    .background-blur {
        filter: ${(props) => `blur(${props.blur || '0px'})`};
    }
    .counter {
        margin-left: 8px;
        background-color: rgba(175, 184, 193, 0.2);
        border: 1px solid rgba(0, 0, 0, 0);
        border-radius: 4px;
        display: inline-block;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        min-width: 27px;
        padding: 0 6px;
        text-align: center;
        min-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-feature-settings: 'lnum';
      }      
`;

const GlobalStylesPresets = () => {
  const { backgroundBlur, onChangeBackgroundBlur } = useSettings();

  useEffect(() => {
    onChangeBackgroundBlur(false);
  }, []);

  return <GlobalStyles blur={backgroundBlur ? '4px' : '0px'} />;
};

export default GlobalStylesPresets;
