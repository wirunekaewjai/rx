import { useSetRecoilState } from 'recoil';
import { nanoid } from 'nanoid';

import toastAtom from '../atom';

import { Variant } from '../message/types';

function useToast ()
{
  const setQueue = useSetRecoilState(toastAtom);

  function enqueueToast (content: string, variant?: Variant)
  {
    setQueue(queue => (
      [
        ...queue,
        {
          id: nanoid(),
          content,
          variant,
        },
      ]
    ));
  }

  return {
    enqueueToast,
  };
}

export default useToast;