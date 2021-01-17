import { FC, createRef, useState, useEffect } from 'react';
import clsx from 'clsx';

import { Props, State } from './types';
import css from './style';

const DEFAULT_STATE: State = {
  // height: 0,
};

const Comp: FC<Props> = ({
  children,
  open,
  onClose,

  rect,
  direction,
  placement,
}) =>
{
  const ref = createRef<HTMLDivElement>();
  const [state, setState] = useState(DEFAULT_STATE);

  function handleInsideClick (ev: React.MouseEvent<HTMLDivElement, MouseEvent>)
  {
    if (!open || !ev.target || typeof onClose !== 'function')
    {
      return;
    }

    const e = ev.target as HTMLElement;
    const self = ref.current as HTMLDivElement;

    for (const tag of ['a', 'button'])
    {
      const elements = self.querySelectorAll(tag);

      for (let i = 0; i < elements.length; i++)
      {
        const el = elements.item(i);

        if (el === e || el.contains(e))
        {
          // if (el.tagName !== 'A')
          // {
          //   ev.preventDefault();
          // }

          ev.stopPropagation();

          onClose();
          return;
        }
      }
    }
  }
 
  useEffect(() =>
  {
    if (!open || !direction || !placement)
    {
      return;
    }

    const el = ref.current as HTMLDivElement;
    const p = 4;

    const self = el.getBoundingClientRect();
    const body = {
      right: window.innerWidth - p,
      left: 0 + p,
    };

    function getY (placement: string)
    {
      if (placement.startsWith('top'))
      {
        return rect.top;
      }
      else if (placement.startsWith('bottom'))
      {
        return rect.bottom;
      }

      return rect.top + (rect.height / 2);
    }

    function getX (placement: string)
    {
      if (placement.endsWith('left'))
      {
        return rect.left;
      }
      else if (placement.endsWith('right'))
      {
        return rect.right - self.width;
      }

      return rect.left + (rect.width / 2) - (self.width / 2);
    }

    if (direction === 'down')
    {
      let top = getY(placement);
      let left = getX(placement);

      const bLeft = body.left;
      const bRight = body.right;

      if (left + self.width > bRight)
      {
        left -= (left + self.width) - bRight;
      }

      if (left < bLeft)
      {
        left = bLeft;
      }

      setState({ top, left });
    }
    else
    {
      let top = getY(placement) - self.height;
      let left = getX(placement);
      
      const bLeft = body.left;
      const bRight = body.right;

      if (left + self.width > bRight)
      {
        left -= (left + self.width) - bRight;
      }

      if (left < bLeft)
      {
        left = bLeft;
      }

      setState({ top, left });
    }
  }, [rect, placement, direction, open]);

  useEffect(() =>
  {
    const self = ref.current as HTMLDivElement;

    function handleOutsideClick (ev: MouseEvent)
    {
      if (!ev.target)
      {
        return;
      }

      const e = ev.target as HTMLElement;

      if (self === e)
      {
        return;
      }

      if (self.contains(e))
      {
        return;
      }
      else
      {
        ev.preventDefault();
        ev.stopPropagation();

        onClose();
      }
    }

    if (open && typeof onClose === 'function')
    {
      document.addEventListener('click', handleOutsideClick, { capture: true });

      return function ()
      {
        document.removeEventListener('click', handleOutsideClick, { capture: true });
      }
    }
  }, [open, onClose]);

  return (
    <div
      ref={ref}
      style={state}
      className={clsx(
        css.content,
        open ? css.open : css.close
      )}
      onClick={handleInsideClick}
    >
      {children}
    </div>
  );
}

export default Comp;