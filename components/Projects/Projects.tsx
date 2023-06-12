import { ProjectCard } from '@/components';
import './Projects.scss';

export function Projects () {
  return(
    <section className='projects'>
      <ProjectCard 
        imgURL={'url(img/projects/project-1.jpg)'}
        deployURL={'https://gloryson.github.io/spaceships/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-2.jpg)'}
        deployURL={'https://gloryson.github.io/shop/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-3.jpg)'}    
        deployURL={'https://gloryson.github.io/psy/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-4.jpg)'}
        deployURL={'https://gloryson.github.io/shelter/pages/main/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-5.jpg)'}
        deployURL={'https://gloryson.github.io/3d-project/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-6.jpg)'}
        deployURL={'https://gloryson.github.io/keyboard/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-7.jpg)'}
        deployURL={'https://gloryson.github.io/gloryson/'}
        
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-8.jpg)'}
        deployURL={'https://gloryson.github.io/CSS-filter-converter-from-black-to-any-color/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-9.jpg)'}
        deployURL={'https://gloryson.github.io/ISS-tracker/'}
      />

      <ProjectCard 
        imgURL={'url(img/projects/project-10.jpg)'}
        deployURL={'https://gloryson.github.io/CV/'}
      />
    </section>
  )
}