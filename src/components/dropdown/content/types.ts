import { Rect, Direction, Placement } from '../types';

export interface Props {
  open: boolean;
  onClose: Function;
  rect: Rect;
  direction?: Direction;
  placement?: Placement;
}

export interface State extends Inset {
  // height: number;
}

export interface Inset {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}