import { RefObject, useEffect, useState } from 'react';




export function useOnScreen ( ref: RefObject<HTMLElement> ) {

  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}