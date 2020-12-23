import { FC, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal: FC = ({ children }) =>
{
  const [mounted, setMounted] = useState(false);

  function handleMount ()
  {
    setMounted(true)
  }

  useEffect(handleMount, []);

  if (!mounted)
  {
    return null
  }

  return createPortal(children, document.body);
}

export default Portal;