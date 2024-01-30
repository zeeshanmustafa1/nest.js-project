import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

let timeout: NodeJS.Timeout | undefined;

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    clearTimeout(timeout);
    timeout = undefined;

    timeout = setTimeout(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);
  };

  useEffect(() => {
    if (!window) return;

    window.addEventListener('resize', handleSize);

    handleSize();

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleSize);
      clearTimeout(timeout);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
