import { useCallback, useEffect, useState } from 'react';




export function useScrollPosition () {

  const [scrollPosition, setScrollPosition] = useState(0);

  const listenScroll = useCallback(() => {
    setScrollPosition(document.documentElement.scrollTop);
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  }, [])

  return scrollPosition;
}