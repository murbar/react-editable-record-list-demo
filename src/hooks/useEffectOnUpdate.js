import { useRef, useEffect } from 'react';

const useEffectOnUpdate = (cb, depsArr) => {
  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      cb();
    }
  }, depsArr);
};

export default useEffectOnUpdate;
