import css, { p, v } from '@wirunekaewjai/css';

export default css`
*, ::after, ::before {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

html {
  ${p.font_family('sans')}
  ${p.font_size('md')}
  /* line-height: 1.5; */
}

body {
  font-family: inherit;
  line-height: inherit;
}

body, blockquote, dd, dl, figure, h1, h2, h3, h4, h5, h6, hr, p, pre {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
}

button {
  background-color: transparent;
  background-image: none
}

fieldset {
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;

  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
}

hr {
  border-top-width: 1px
}

img {
  border-style: solid
}

textarea {
  resize: vertical
}

input::placeholder, textarea::placeholder {
  color: ${v.color.gray(400)};
}

button {
  cursor: pointer
}

table {
  border-collapse: collapse
}

h1, h2, h3, h4, h5, h6 {
  font-size: inherit;
  font-weight: inherit
}

a {
  color: inherit;
  text-decoration: inherit
}

button, input, optgroup, select, textarea {
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  
  color: inherit;
  line-height: inherit;
}

code, kbd, pre, samp {
  ${p.font_family('mono')};
}

audio, canvas, embed, iframe, img, object, svg, video {
  display: block;
  vertical-align: middle;
}

img, video {
  max-width: 100%;
  height: auto;
}
`;