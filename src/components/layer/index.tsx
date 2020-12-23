import { FC } from 'react';
import Portal from '../portal';
import Screen from './screen';

import { Props } from './types';

const Comp: FC<Props> = ({
  id,
  className,

  open,
  closable,
  children,

  onClose,
}) =>
{
  return (
    <Portal>
      <Screen
        id={id}
        className={className}
        closable={closable}
        open={open}
        onClose={onClose}
      >
        {children}
      </Screen>
    </Portal>
  );
}

export default Comp;