import { createGlobalStyle } from "styled-components";
import reset from "reset-css";
const GlobalStyles = createGlobalStyle`
    ${reset}
    body:{
        margin:0px;
        padding:0px auto;
    }
`;

export default GlobalStyles;
