'use client'

import Link from 'next/link';
import { useRef } from 'react';
import { useOnScreen } from '@/hooks';
import './ProjectCard.scss';


interface ProjectCardProps {
  imgURL: string;
  title: string;
  text: string;
  deployURL: string;
  githubURL: string;
}


export function ProjectCard ( { imgURL, title, text, deployURL, githubURL }: ProjectCardProps ) {

  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return(
    <div ref={ref} className={'project__card' + ' ' + (isVisible ? 'in' : 'out')}>
      <div className={'project__card__image'} style={{backgroundImage: imgURL}}></div>
      <div className={'project__card__description'}>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={'links'}>
          <Link href={deployURL} className={'deploy'}></Link>
          <Link href={githubURL} className={'github'}></Link>
        </div>
      </div>
    </div>
  )
}