import { FC, useEffect } from 'react';
import clsx from 'clsx';
import css from './style';

import { Props } from '../types';

const Comp: FC<Props> = ({
  id,
  className,

  open,
  closable,
  children,

  onClose,
}) =>
{
  function handleClick (e: React.MouseEvent<HTMLDivElement, MouseEvent>)
  {
    if (!!closable)
    {
      if (typeof onClose === 'function' && e.target === e.currentTarget)
      {
        onClose();
      }
    }
  }

  function handleKeyUp (e: KeyboardEvent)
  {
    if (typeof onClose === 'function' && e.code === 'Escape')
    {
      onClose();
    }
  }

  function handleEscape ()
  {
    if (!!closable)
    {
      window.addEventListener('keyup', handleKeyUp);

      return () => 
      {
        window.removeEventListener('keyup', handleKeyUp);
      }
    }
  }

  useEffect(handleEscape, [closable]);

  return (
    <div
      onClick={handleClick}
      id={id}
      className={clsx(css.screen, open ? css.screenOpen : css.screenClose, className)}
    >
      {children}
    </div>
  );
}

export default Comp;