import { ProjectCard } from '@/components';
import './Projects.scss';



export function Projects () {
  return(
    <section className={'projects'}>

      <ProjectCard 
        imgURL={'url(/img/projects/project-1.jpg)'}
        title={'Spaceships battle'}
        text={'Game spaceships battle is analog of sea battle. In this project, I used React and TypeScript. There is a field for placing ships, sounds and a bot that plays against you. By clicking on the links, you can see the finished version and also go to the github repository to view the project itself.'}
        deployURL={'https://gloryson.github.io/spaceships/'}
        githubURL={'https://github.com/Gloryson/spaceships'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-2.jpg)'}
        title={'Online store in JavaScript'}
        text={'This shop is written in pure Javascript without any libraries or frameworks. It has its own implementation of the state of the cart, items in the cart and registration with saving in local storage. Please note that in my github there is a repository with the same store, but rewritten in React, TypeScript, Express and MongoDB. Here is a link to the deployed project on the github page. But the fullstack app can be seen in the repository - store.'}
        deployURL={'https://gloryson.github.io/shop/'}
        githubURL={'https://github.com/Gloryson/shop'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-3.jpg)'}
        title={'Psychologist Anatoly Balkunou'}
        text={'A small application of the psychologist Anatoly Balkunou. The project was implemented in React and TypeScript. There is also authorization through Firebase and psychologist posts are stored in its repository. In the version of the project, which is available via links, firebase is disabled.'}
        deployURL={'https://gloryson.github.io/psy/'}
        githubURL={'https://github.com/Gloryson/psy'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-4.jpg)'}
        title={'3D Room'}
        text={'In this small project, I studied keyboard and mouse controls in first person. The project is written in JavaScript and uses the ThreeJS library. This is 3D room: Move - WASD, Look - mouse, Jump - space.'}
        deployURL={'https://gloryson.github.io/3d-project/'}
        githubURL={'https://github.com/Gloryson/3d-project'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-5.jpg)'}
        title={'Shelter'}
        text={'This project was done a long time ago as part of the Rolling Stones School course. There is very bad code here, but I liked the project itself, so I decided to post it here.'}
        deployURL={'https://gloryson.github.io/shelter/pages/main/'}
        githubURL={'https://github.com/Gloryson/shelter'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-6.jpg)'}
        title={'Virtual keyboard'}
        text={'This is another project within the Rolling Stones School course. There is very bad code here, but everything works fine as it should. I also added a lot of additional functionality that was not intended by the school.'}
        deployURL={'https://gloryson.github.io/keyboard/'}
        githubURL={'https://github.com/Gloryson/keyboard'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-7.jpg)'}
        title={'CSS filter converter from black to any color'}
        text={'This mini app create css filter property which change black color to target color. I just got tired of looking for a converter in Google every time and I wrote my own.'}
        deployURL={'https://gloryson.github.io/CSS-filter-converter-from-black-to-any-color/'}
        githubURL={'https://github.com/Gloryson/CSS-filter-converter-from-black-to-any-color'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-8.jpg)'}
        title={'Where is the ISS now?'}
        text={'Are you curious to know where the ISS is flying right now? Just follow the link and find out. The whole project in one HTML file.'}
        deployURL={'https://gloryson.github.io/ISS-tracker/'}
        githubURL={'https://github.com/Gloryson/ISS-tracker'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-9.jpg)'}
        title={'My old CV'}
        text={'When I was studying programming, I did not know what projects to do. Therefore, often I just made myself a portfolio site in some interesting and creative format. This is my very first portfolio. Technologies - HTML, CSS, JavaScript.'}
        deployURL={'https://gloryson.github.io/gloryson/'}
        githubURL={'https://github.com/Gloryson/gloryson'}
      />

      <ProjectCard 
        imgURL={'url(/img/projects/project-10.jpg)'}
        title={'Another one of my old CV'}
        text={'As in the previous project, this is another creative portfolio. This time in 3D format. Technologies - ThreeJS and JavaScript.'}
        deployURL={'https://gloryson.github.io/CV/'}
        githubURL={'https://github.com/Gloryson/CV'}
      />

    </section>
  )
}