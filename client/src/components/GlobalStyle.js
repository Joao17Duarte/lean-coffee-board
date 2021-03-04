import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  font-size: 112.5%;
  margin: 0 auto;
  max-width: 600px;
}
input,
button {
  font-size: inherit;
  margin:5px
}
input {
  padding: 5px;
}
`