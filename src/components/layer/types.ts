export interface Props {
  id?: string;
  className?: string;

  open: boolean;
  onClose?: Function;

  closable?: boolean;
}