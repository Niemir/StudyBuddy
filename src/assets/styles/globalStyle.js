import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`



html{
    box-sizing:border-box;

}
*,*::before,*::after{
    box-sizing:inherit;
    padding:0;
    margin:0;
}
body{
    font-family: 'Montserrat', sans-serif;

}
button,a {
    /* font-family: 'Montserrat', sans-serif; */

}

`;
