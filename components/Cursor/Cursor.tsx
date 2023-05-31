'use client'

import { useEffect, useState } from 'react';
import './Cursor.scss';



export function Cursor () {

  const [mousePosition, setMousePosition] = useState( { x : 0, y: 0 } );
  const screenHeight: number = window.innerHeight;

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      setMousePosition( { x: e.pageX, y: e.pageY } );
    })
  }, [])

  return mousePosition.y < screenHeight ? (
    <div className={'cursor'} style={{ top: mousePosition.y, left: mousePosition.x }}></div>
  ) : (
    <></>
  )
}