import { createElement } from 'react';
import clsx from 'clsx';

import Dropdown from '../dropdown';
import css from './style';

import {
  MenuProps,
} from './types';

const Menu: MenuProps = ({
  children,
  base,
  direction,
  placement,
}) =>
{
  return (
    <Dropdown
      content={
        <div className={css.card}>
          {children}
        </div>
      }
      direction={direction}
      placement={placement}
    >
      {base}
    </Dropdown>
  );
}

Menu.List = ({ children }) =>
{
  return (
    <div className={css.group}>
      {children}
    </div>
  );
}

Menu.Item = ({ children }) =>
{
  return (
    <div className={css.item}>
      {children}
    </div>
  );
}

Menu.Button = ({
  component = 'button',

  className,
  children,

  ...restProps
}) =>
{
  const props = {
    className: clsx(css.button, className),
    ...restProps,
  };

  return createElement(component, props, children);
}

export default Menu;