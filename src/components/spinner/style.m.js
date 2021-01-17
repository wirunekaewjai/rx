import css from '@wirunekaewjai/css';

export default css`
@keyframes spin
{
	0% 
	{ 
		transform: rotate(0deg); 
	}
	
	100% 
	{ 
		transform: rotate(360deg); 
	}
}

module-spinner {
	position: relative;

	animation-name: spin;
	animation-duration: 0.8s;
	animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	animation-iteration-count: infinite;

	width: 1em;
	height: 1em;

	border-width: 0.1em;
	border-style: solid;
	border-top-color: currentColor;
	border-bottom-color: transparent;
	border-left-color: transparent;
	border-right-color: transparent;
	border-radius: 50%;
}

/* module-spinner::before
{
	content: '';
	position: absolute;

	left: -0.1em;
	right: -0.1em;
	top: -0.1em;
	bottom: -0.1em;
	
	border-color: currentColor;
	border-style: solid;
	border-width: 0.1em;
	border-radius: 50%;

	opacity: 0.1;
} */
`;