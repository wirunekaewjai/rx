import css, { p, v } from '@wirunekaewjai/css';

export default css`
module-content {
  position: fixed;

  z-index: 10;

	animation-duration: 150ms;
	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

module-open {
  animation-name: fade-in;
}

module-close {
  pointer-events: none;
  animation-name: fade-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
`;