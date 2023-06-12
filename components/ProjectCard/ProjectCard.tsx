'use client'

import Link from 'next/link';
import { useRef } from 'react';
import { useOnScreen } from '@/hooks';
import './ProjectCard.scss';


interface ProjectCardProps {
  imgURL: string;
  deployURL: string;
}


export function ProjectCard ( { imgURL, deployURL }: ProjectCardProps ) {

  const ref = useRef<HTMLAnchorElement>(null);
  const isVisible = useOnScreen(ref);

  return(
    <Link
      href={deployURL}
      target={'blank'}
      ref={ref}
      className={'project__card'}
      style={{ transform: `scale(${isVisible ? 1 : 0})` }}
    >
      <div
        className={'project__card__image'}
        style={{backgroundImage: imgURL}}
      ></div>
    </Link>
  )
}