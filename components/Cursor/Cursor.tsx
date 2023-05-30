'use client'

import { useEffect, useState } from 'react';
import './Cursor.scss';



export function Cursor () {

  const [mousePosition, setMousePosition] = useState( { x : 0, y: 0 } );

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      setMousePosition( { x: e.pageX, y: e.pageY } );
    })
  }, [])

  return(
    <div className={'cursor'} style={{ top: mousePosition.y, left: mousePosition.x }}></div>
  )
}