import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import Portal from '../../portal';
import Container from '../container';
import Message from '../message';

import toastAtom from '../atom';

const Provider: FC = () =>
{
  const queue = useRecoilValue(toastAtom);

  if (queue.length === 0)
  {
    return null;
  }

  return (
    <Portal>
      <Container>
      {
        queue.map((e) => (
          <Message
            key={e.id}
            id={e.id}
            variant={e.variant}
          >
            {e.content}
          </Message>
        ))
      }
      </Container>
    </Portal>
  );
}

export default Provider;