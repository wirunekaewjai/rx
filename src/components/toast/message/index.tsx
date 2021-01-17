import { FC, useState, useEffect } from 'react';
import { Props } from './types';

import { useSetRecoilState } from 'recoil';
import toastAtom from '../atom';

import clsx from 'clsx';
import css from './style';

const Message: FC<Props> = ({
  id,
  variant,
  children,
}) =>
{
  const setQueue = useSetRecoilState(toastAtom);
  const [show, setShow] = useState(true);
  const [stop, setStop] = useState(false);

  useEffect(() =>
  {
    if (!stop)
    {
      const t = setTimeout(async () =>
      {
        setShow(false);
        await new Promise(r => setTimeout(r, 150));
        setQueue(queue => queue.filter(e => e.id !== id));
      }, 4850);

      return function ()
      {
        clearTimeout(t);
      }
    }
  }, [stop, id, setQueue]);

  return (
    <div className={css.container} >
      <div
        onMouseEnter={() => setStop(true)}
        onMouseLeave={() => setStop(false)}
        className={clsx(
          css.content,
          variant ? css[variant] : css.normal,
          show ? css.show : css.hide,
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Message;