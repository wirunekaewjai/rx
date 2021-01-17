import { FC } from 'react';

import css from './style';
import { Props } from './types';

const Comp: FC<Props> = ({
	color,
	size,
}) =>
{
  return (
		<div
			className={css.spinner}
			style={{
				color,
				fontSize: size,
			}}
		/>
	);
}

Comp.defaultProps = {
	color: 'currentColor',
	size: 'inherit',
};

export default Comp;