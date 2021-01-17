import { FC, createRef, useState, useEffect } from 'react';
import Portal from '../portal';

import { Props, State } from './types';
import css from './style';

import Content from './content';

const DEFAULT_STATE_1: State = {
  mounted: false,
  open: false,
  rect: {
    top: 0,
    right: 2,
    bottom: 2,
    left: 0,
    width: 2,
    height: 2,
  }
};

const DEFAULT_STATE_2: State = {
  mounted: true,
  open: false,
  rect: {
    top: 0,
    right: 2,
    bottom: 2,
    left: 0,
    width: 2,
    height: 2,
  }
};

const Comp: FC<Props> = ({
  content,
  children,
  direction = 'down',
  placement,
}) =>
{
  const ref = createRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  const [state, setState] = useState<State>(DEFAULT_STATE_1);

  function handleClick (ev: React.MouseEvent<HTMLDivElement, MouseEvent>)
  {
    if (state.open || !ev.target)
    {
      return;
    }

    const e = ev.target as HTMLElement;

    if (e === ref.current)
    {
      return;
    }

    if (ref.current?.contains(e))
    {
      handleOpen();

      ev.preventDefault();
      ev.stopPropagation();
    }
  }

  function handleOpen ()
  {
    const e = ref.current as HTMLDivElement;
    // const r = e.getBoundingClientRect();
    const p = 4;

    let top = window.innerHeight;
    let bottom = 0;

    let left = window.innerWidth;
    let right = 0;

    for (let i = 0; i < e.children.length; i++)
    {
      const child = e.children.item(i);
      const r = child?.getBoundingClientRect();

      if (!r)
      {
        continue;
      }

      if (r.top < top)
      {
        top = r.top;
      }

      if (r.right > right)
      {
        right = r.right;
      }

      if (r.bottom > bottom)
      {
        bottom = r.bottom;
      }

      if (r.left < left)
      {
        left = r.left;
      }
    }

    setState({
      mounted: true,
      open: true,
      rect: {
        top: top - p,
        right: right + p,
        bottom: bottom + p,
        left: left - p,
        width: (right - left) + (p * 2),
        height: (bottom - top) + (p * 2),
      }
    });
  }

  function handleClose ()
  {
    setState(DEFAULT_STATE_2);
  }

  useEffect(() =>
  {
    if (!state.open)
    {
      const t = setTimeout(() => setState(DEFAULT_STATE_1), 1000);

      return function ()
      {
        clearTimeout(t);
      }
    }
  }, [state.open]);

  return (
    <div
      ref={ref}
      className={css.dropdown}
      onClick={handleClick}
    >
      {children}
      {
        state.mounted &&
        <Portal>
          <Content
            children={content}
            onClose={handleClose}
            open={state.open}
            rect={state.rect}
            direction={direction}
            placement={placement ? placement : direction === 'down' ? 'top-left' : 'bottom-left'}
          />
        </Portal>
      }
    </div>
  );
}

export default Comp;