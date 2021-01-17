import css, { p, v } from '@wirunekaewjai/css';

export default css`
module-container {
	padding-top: ${v.size(1)};
	padding-bottom: ${v.size(1)};
	padding-left: ${v.size(1)};
	padding-right: ${v.size(1)};
}

module-content {
	${p.box_shadow('md')}
	${p.font_size('md')}

	padding-top: ${v.size(3)};
	padding-bottom: ${v.size(3)};
	padding-left: ${v.size(4)};
	padding-right: ${v.size(4)};

	border-radius: ${v.radius('sm')};
	border-style: none;

	color: white;

	animation-duration: 150ms;
	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

module-show {
	animation-name: slide-in-left;
}

module-hide {
	animation-name: slide-out-left;
}

module-normal {
	background-color: ${v.color.true_gray(800)};
}

module-success {
	background-color: ${v.color.lime(600)};
}

module-error {
	background-color: ${v.color.red(600)};
}

module-warning {
	background-color: ${v.color.amber(500)};
}

module-info {
	background-color: ${v.color.blue(600)};
}

@media screen and (max-width: 319px)
{
	module-content {
		width: 240px;
	}
}

@media screen and (min-width: 320px)
{
	module-content {
		width: 288px;
	}
}

@keyframes slide-in-left {
	0% {
		transform: translateX(-100%);
	}

	100% {
		transform: none;
	}
}

@keyframes slide-out-left {
	0% {
		transform: none;
	}
	
	100% {
		transform: translateX(-100%);
	}
}
`;