export interface Props {
  content: React.ReactNode;
  direction?: Direction;
  placement?: Placement;
}

export interface State {
  mounted: boolean;
  open: boolean;
  rect: Rect;
}

export interface Rect {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
};

export type Direction = 'up' | 'down';

export type Placement =
'top' | 'top-left' | 'top-right' |
'bottom' | 'bottom-left' | 'bottom-right' |
'left' | 'right'
;