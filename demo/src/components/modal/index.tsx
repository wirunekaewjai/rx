import { useState } from 'react';
import clsx from 'clsx';

import Layer from 'src/core/components/layer';
import css from './style';

const Comp = () =>
{
  const [open, setOpen] = useState(true);

  return (
		<>
			<button onClick={() => setOpen(true)}>
				OPEN
			</button>
			<Layer
        id="unique-id"
        className={clsx(css.layer, open ? null : css.layerClose)}
        closable={true}
        open={open}
        onClose={() => setOpen(false)}
			>
				<div className={css.modal}>
					<div className={css.modalContent}>
						<p>Hello, World</p>
						<button onClick={() => setOpen(false)}>
							CLOSE
						</button>
					</div>
				</div>
			</Layer>
		</>
	);
}

export default Comp;