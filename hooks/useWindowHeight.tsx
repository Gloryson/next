import { useEffect, useState } from "react";




export function useWindowHeight () {

  const [height, setHeight] = useState(1);

  useEffect(() => {
    if (typeof window !== 'undefined') setHeight(window.innerHeight);

    function listenResize () {
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', listenResize);
    return () => window.removeEventListener('resize', listenResize);
  }, [])

  return height;
}