import Link from 'next/link';
import './ProjectCard.scss';


interface ProjectCardProps {
  imgURL: string;
  title: string;
  text: string;
  deployURL: string;
  githubURL: string;
}


export function ProjectCard ( { imgURL, title, text, deployURL, githubURL }: ProjectCardProps ) {

  return(
    <div className={'project__card'}>
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