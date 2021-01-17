import { FC } from 'react';

// import clsx from 'clsx';
import css from './style';

const Container: FC = ({
  children,
}) =>
{
  return (
    <div className={css.container} >
      {children}
    </div>
  );
}

export default Container;