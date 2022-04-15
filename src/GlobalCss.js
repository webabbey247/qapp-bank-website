import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --primary: #063043;
    --secondary: #090C14;
    --text-header-color: #2E5161;
    --text-color: #757095;
    --text-color-2: #555555;
    --gray-color: #FCFEFE;
    --input-color: #235E78;
    --input-text-color: #58A6C9;
    --white: #ffffff;
    --orange: #FF6501;
    --auth-border: #cacaca;
    --box-shadow: rgba(0, 0, 0, 0.15);
    --font-manrope: "Manrope", sans-serif;
    --font-sans: "Work Sans", sans-serif;
  }
  *,
    *::before,
    *::after {
    box-sizing: border-box;
  }

  body, html{
    font-family: 'Manrope', sans-serif;
    min-height: 100vh;
    margin:0;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -moz-text-size-adjust: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: var(--white);
    text-rendering: optimizeLegibility;
   }

   h1, h2, h3, h4, p {
    font-family: 'Manrope', sans-serif;
    margin: 0;
    padding: 0;
   }

   h1, h2, h3, h4 {
    color: var(--text-header-color);
   }

   p {
    color: var(--white);
    font-family: 'Work Sans', sans-serif;    
   }
`;

export const SiteContainer = styled.div`
  width: min(100%, 75rem);
  margin-right: auto;
  margin-left: auto;
`;
