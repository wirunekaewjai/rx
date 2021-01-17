import { FC } from 'react';
import { Direction, Placement } from '../dropdown/types';

export type MenuProps = FC<{
  base: React.ReactNode;
  direction?: Direction;
  placement?: Placement;
}> & {
  List: ListProps,
  Item: ItemProps,
  Button: ButtonProps,
};

export type ListProps = FC;
export type ItemProps = FC;
export type ButtonProps = FC<React.ButtonHTMLAttributes<any> & {
  component?: React.ElementType;
}>;