import { createGlobalStyle } from "styled-components";

const GlobeStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body{
  background: #fff;
  font-family: 'Roboto', sans-serif;
}

html,
body,
.App,
#root {
  height: 100%;
}

.App {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

footer {
  margin-top: auto;
}

`;

export default GlobeStyle;
