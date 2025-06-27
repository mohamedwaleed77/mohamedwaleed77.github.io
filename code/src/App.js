import React from 'react';
import MatrixCanvas from './components/MatrixCanvas';
import ProjectCard from './components/ProjectCard';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import GoUp from './components/GoUp';
 
 
function App() {
  return (

    <div className='[text-shadow:_0_0px_5px_rgb(255_255_255_/_1)]text-neutral-700 flex flex-col gap-20 font-arial justify-center '>
      <GoUp></GoUp>
 
 
      <MatrixCanvas></MatrixCanvas> 
      <NavBar></NavBar>

    <section className='flex flex-col gap-12 text-center text-white h-72 justify-center'>
      <p className='text-4xl' id='about' >ABOUT ME</p>
      <div>
      <p className='text-2xl'>Hello! I'm an engineering student with a passion for solving problems.</p>
      <p className='text-2xl'>Welcome to my portfolio!</p>
      </div>
    </section>

    <section  className='flex flex-col gap-12 items-center text-center text-white'>
      <p className='text-4xl' id='projects' >PROJECTS</p>
      <div className='flex gap-4 justify-center items-center text-neutral-700 flex-wrap w-5/6'>
      <ProjectCard project='E-Commerce MERN Fullstack' link='https://github.com/mohamedwaleed77/E-Commerce_MERN_Fullstack_AMIT'></ProjectCard>
      <ProjectCard project='IOT based Earthquake Station' link='https://github.com/mohamedwaleed77/IOT_based_EarthquakeStation'></ProjectCard>
      <ProjectCard project='Depi Project' link='https://github.com/mohamedwaleed77/depi_project' ></ProjectCard>
      <ProjectCard project='Deaf Gloves' link='https://github.com/mohamedwaleed77/deaf_gloves' ></ProjectCard>
      <ProjectCard project='GUI Vigenere cipher file encryption' link='https://github.com/mohamedwaleed77/GUI-Vigenere-cipher-file-encryption' ></ProjectCard>
    
     </div>

    </section >
    
    <section id='skills' className='flex flex-col gap-12 text-center text-white'>
    <p className='text-4xl '>SKILLS</p>
    <Skills skills={['HTML & CSS','JavaScript','Python','Ansible','Jenkins','C','Linux','C++']}></Skills>
    </section>

    <section id='contact'>
        <div  className='bg-white h-72 text-center flex flex-col justify-center gap-4'>
            <p className='text-4xl opacity-100'>CONTACT</p>
            <p className='opacity-100'>If you'd like to work together, feel free to reach out!</p>
            <div className='opacity-100 flex justify-center'>
                <a href="mailto:MohamedWaleedCSE@gmail.com" className='bg-blue-600 text-white p-4 translate-x-4 rounded-full z-10'>Email Me</a>
                <p className='bg-neutral-800 text-white p-4 rounded-r-full -translate-x-4 w-80 text-end'>MohamedWaleedCSE@gmail.com</p>
            </div>
            <div className='opacity-100 flex justify-center'>
                <p className='opacity-100 bg-blue-600 text-white p-4 translate-x-4 rounded-full z-10'>Call Me</p>
                <p className='opacity-100 bg-neutral-800 text-white p-4 rounded-r-full -translate-x-4 w-44 text-end'>+201554230714</p>
            </div>
        </div>
    </section>
    <section className='flex items-center text-white justify-center bg-neutral-800 h-20 '>
    <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </section>
    </div>
  );
}

export default App;
