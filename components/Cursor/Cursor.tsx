'use client'

import { useCallback, useEffect, useState } from 'react';
import './Cursor.scss';



export function Cursor () {
  
  const [mousePosition, setMousePosition] = useState( { x : 0, y: 0 } );

  const listenMouse = useCallback((e: MouseEvent) => {
    if (e.pageY < window.innerHeight + 100) {
      setMousePosition({ x: e.pageX, y: e.pageY });
    }
  }, []);

  useEffect(() => {
    if (mousePosition.y < window.innerHeight + 100) {
      window.addEventListener('mousemove', listenMouse);
    }
    return () => {
      window.removeEventListener('mousemove', listenMouse);
    }
  }, []);


  return mousePosition.y < window.innerHeight && (
    <div
      className={'cursor'}
      style={{ top: mousePosition.y, left: mousePosition.x }}
    ></div>
  )
}