import css, { p, v } from '@wirunekaewjai/css';

export default css`
module-layer {
  background: rgba(0,0,0, 0.64);
  z-index: 100;
}

module-layer > :first-child {
  ${p.transition('transform')}
}

module-layerClose > :first-child {
  transform: scale(0);
}

module-modal {
  width: 100%;
	height: 100%;
	
	max-width: 240px;
	max-height: 180px;

	overflow: hidden;

	padding-top: ${v.size(4)};
	padding-bottom: ${v.size(4)};
	padding-left: ${v.size(4)};
	padding-right: ${v.size(4)};
}

module-modalContent {
  ${p.box_shadow('md')}

	border-radius: ${v.radius('md')};
	background: white;

	padding-top: ${v.size(4)};
	padding-bottom: ${v.size(4)};
	padding-left: ${v.size(4)};
	padding-right: ${v.size(4)};

	width: 100%;
	height: 100%;
	
	overflow-y: auto;
}
`;