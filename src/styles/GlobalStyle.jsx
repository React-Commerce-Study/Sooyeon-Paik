import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';
import './global.css';

const GlobalStyle = createGlobalStyle`
    ${reset}

html, body, div, span, applet,
h1, h2, h3, h4, h5, h6, p, 
a, em, img, 
dl, dt, dd, ol, ul, li,
fieldset, form, label, 
table, caption, tbody, tfoot, thead, tr, th, td,
article, footer, header, nav, section {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, footer, header, nav, section {
	display: block;
}

body {
	font-family: 'Spoqa Han Sans Neo', sans-serif;
    color: inherit;
}

ol, ul, li {
	list-style: none;
}

a {
    color: inherit;
    text-decoration: none;
}

button, input, textarea {
    font-family: 'Spoqa Han Sans Neo', sans-serif;
    border: none;
    color: inherit;
    background-color: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0;
}

button {
    cursor: pointer;
}

img {
    display: block;
    width: 100%;
    height: 100%;
}
`;

export default GlobalStyle;