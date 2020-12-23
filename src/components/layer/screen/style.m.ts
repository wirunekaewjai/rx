import css, { p } from '@wirunekaewjai/css';

export default css`
module-screen {
  ${p.transition('opacity')};

  display: flex;

  align-items: center;
  justify-content: center;

  position: fixed;

  left: 0;
  right: 0;

  top: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
}

module-screenOpen {
  opacity: 1;
}

module-screenClose {
  pointer-events: none;
  opacity: 0;
}
`;