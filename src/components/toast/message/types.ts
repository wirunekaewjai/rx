
export interface Props {
  id: string;
  variant?: Variant;
}

export type Variant = 'success' | 'error' | 'warning' | 'info';