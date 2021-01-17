import { atom } from 'recoil';
import { Item } from './types';

const toastAtom = atom<Item[]>({
  key: 'toast',
  default: [],
});

export default toastAtom;