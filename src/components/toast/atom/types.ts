import { Variant } from '../message/types';

export interface Item {
  id: string;
  variant?: Variant;
  content: string;
}