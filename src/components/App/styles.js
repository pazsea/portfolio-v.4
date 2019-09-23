import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  ${"" /* width: 100vw; */}
  ${"" /* height: 100vh;  */}
  font-size: 16px;
  margin: 0;
  font-family: 'Josefin Sans', sans-serif;
  font-display: swap;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${"" /* overflow:hidden; */}
  overflow-x:hidden;
  background: #EFE2BA;

}


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
  outline:none;
}

.stripes_image {
  position: absolute;
  top:-110px;
  left: -60px;
  z-index: -10;
  @media (max-width: 765px) { 
    display:none;
   }
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;

} 

`;

/* @media (min-width: 576px) { ... }

@media (min-width: 768px) { ... }

@media (min-width: 992px) { ... }*/
