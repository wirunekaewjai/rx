import { useState } from 'react'

function useLayerStack (count: number = 1)
{
  const [index, setIndex] = useState(0);

  function push ()
  {
    setIndex(Math.min(index + 1, count));
  }

  function pop ()
  {
    setIndex(Math.max(index - 1, 0));
  }

  return [index, push, pop];
}

export default useLayerStack;