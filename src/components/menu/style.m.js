import css, { p, v } from '@wirunekaewjai/css';

export default css`
module-card {
  ${p.box_shadow('md')}

  border-radius: ${v.radius('md')};
  background-color: white;

  color: ${v.color.cool_gray(900)};
  min-width: ${v.size(40)};
}

module-card > * + * {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${v.color.cool_gray(200)};
}

module-group {
  display: flex;

  flex-direction: column;

  padding-top: ${v.size(2)};
  padding-bottom: ${v.size(2)};
  padding-left: ${v.size(2)};
  padding-right: ${v.size(2)};
}

module-item {
  ${p.font_size('sm')}

  border-radius: ${v.radius('md')};

  padding-top: ${v.size(2)};
  padding-bottom: ${v.size(2)};
  padding-left: ${v.size(3)};
  padding-right: ${v.size(3)};

  appearance: none;

  width: 100%;
  text-align: left;
}

module-button {
  ${p.font_size('sm')}
  ${p.transition('colors')}

  border-radius: ${v.radius('md')};

  appearance: none;
 
  padding-top: ${v.size(2)};
  padding-bottom: ${v.size(2)};
  padding-left: ${v.size(3)};
  padding-right: ${v.size(3)};

  width: 100%;
  text-align: left;
}

module-button:hover {
  background-color: ${v.color.indigo(100)};
  color: ${v.color.indigo(500)};
}

module-button:focus {
  outline: none;
}
`;