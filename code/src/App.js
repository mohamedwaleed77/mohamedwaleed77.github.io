import React from 'react';
import MatrixCanvas from './components/MatrixCanvas';
import ProjectCard from './components/ProjectCard';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import GoUp from './components/GoUp';
import Badge from './components/Badge';
import Timeline from './components/Experience'
function App() {
  const timelineItems = [
  {
    job: "DevOps Engineer | MCIT DEPI",
    date: "06/2024 - 01/2025",
    description: "Improved Linux skills, implemented CI/CD processes to automate workflows, and developed mini-projects to showcase CI/CD principles, contributed to a graduation project as part of a team and earned a certification."
  },
  {
    job: "DevOps/Software Engineer | Valeo",
    date: "09/2025 - Recent",
    description: "Joined the R&D Team, working with CI/CD pipelines, Flask, React, Docker, developing backup and replication scripts, code refactoring, and performed reverse engineering for an undocumented project, while collaborating in Agile teams, gaining hands-on experience with industry-level tools and contributing to demo events. Worked with V-core and Valeo services teams."
  }
];
  return (

    <div className='[text-shadow:_0_0px_5px_rgb(255_255_255_/_1)]text-neutral-700 flex flex-col gap-20 font-arial justify-between '>
      <GoUp></GoUp>
      <MatrixCanvas></MatrixCanvas> 

      <NavBar></NavBar>
    <section className='flex flex-col gap-12 text-center text-white min-h-72 justify-center items-center '>
      <p className='text-4xl' id='about' >ABOUT ME</p>
      <div className='p-4 w-[90%] backdrop-blur-md bg-neutral-900/20 text-2xl flex flex-col text-center items-center justify-center rounded-lg'>
      <p className='text-xl '>Results-driven Computer Systems Engineer with expertise in embedded systems, DevOps, and full-stack development. Shifted
from Mechatronics Engineering, extending studies by a year to gain real-world experience and strong academic performance.
Skilled in delivering end-to-end systems and collaborating across teams.</p>
      <p className='text-2xl'>Welcome to my portfolio!</p>
      </div>
    </section>

    <section id='Timeline' className='flex flex-col gap-12 text-center  text-white min-h-72 justify-center'>
      <p className='text-4xl' id='about' >Experience</p>
      <Timeline items={timelineItems} />
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
    <Skills skills={[
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux Toolkit',
  'Next.js',
  'Tailwind CSS',
  'i18next',
  'Node.js',
  'Express',
  'NestJS',
  'Socket.io',
  'FastAPI',
  'Flask',
  'GraphQL',
  'Stripe',
  'REST APIs',
  'JWT',
  'C',
  'C++',
  'Python',
  'Embedded C',
  'Shell Scripting',
  'SQL',
  'MongoDB',
  'Mongoose',
  'MySQL',
  'Sequelize',
  'Redis',
  'Docker',
  'Docker Compose',
  'Kubernetes',
  'K3s',
  'Jenkins',
  'Git',
  'SSH',
  'Ansible',
  'Prometheus',
  'Grafana',
  'cAdvisor',
  'Linux',
  'Debian',
  'CCNA',
  'MCSA',
  'RHCSA',
  'FTP',
  'VSFTPD',
  'Reverse Engineering',
  'Tomcat',
  'Maven',
  'Machine Learning',
  'AutoCAD',
  'LaTeX'
]}></Skills>
    </section>
    <section id='badges' className='flex flex-col gap-12 text-center text-white'>
      <p className='text-4xl '>BADGES</p>
      <div class=' flex gap-4 items-center justify-center h-[calc(50%+2%)] flex-wrap'>
      <Badge link='https://leetcode.com/u/mohamedwaleed77/' location='365_new.gif'></Badge>
      <Badge link='https://leetcode.com/u/mohamedwaleed77/' location='200.gif'></Badge>
      <Badge link='https://leetcode.com/u/mohamedwaleed77/'  location='2024-50.gif'></Badge>
      <Badge link='https://leetcode.com/u/mohamedwaleed77/'  location='2024-100-new.gif'></Badge>
      <Badge link='https://leetcode.com/u/mohamedwaleed77/'  location='2550.gif'></Badge>
      <Badge link='https://leetcode.com/u/mohamedwaleed77/'  location='25100.gif'></Badge>
      <Badge link='https://www.credly.com/badges/e4304a33-6457-428b-b908-ca0445f1ffd0/'  location='CCNAENSA__1_.png'></Badge>
      <Badge link='https://www.credly.com/badges/d0b3167e-5486-4290-8eae-3f5e28668583/'   location='CCNAITN__1_.png'></Badge>
      <Badge link='https://www.credly.com/badges/70914ad7-2d73-4aa8-bbc9-914c64b8ade8/'   location='CCNASRWE__1_.png'></Badge>
      <Badge link='https://www.credly.com/badges/99c50932-76c3-435a-9362-04dbb0589a7e/'   location='EndpointSecurity.png'></Badge>
      <Badge link='https://www.credly.com/badges/201e6ace-dfc4-40f1-9211-398cb9dce9e3/public_url'   location='I2CS__1_.png'></Badge>
      </div>
    </section>
    <section id="contact">
      <div className="backdrop-blur-md bg-neutral-900/70 h-auto py-12 text-center flex flex-col justify-center gap-6">

        <p className="text-4xl opacity-100 text-white">CONTACT</p>
        <p className="opacity-100 text-white">
          If you'd like to work together, feel free to reach out!
        </p>

        {/* Email Row */}
        <div className="opacity-100 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <a
            href="mailto:MohamedWaleedCSE@gmail.com"
            className="bg-blue-600 text-white p-4 rounded-full sm:translate-x-4 sm:z-10"
          >
            Email
          </a>
          <p className="bg-neutral-800 text-white p-4 rounded-full sm:rounded-r-full sm:rounded-l-none sm:-translate-x-4 w-80 text-center sm:text-end">
            MohamedWaleedCSE@gmail.com
          </p>
        </div>

        {/* Phone Row */}
        <div className="opacity-100 flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
          <p className="bg-blue-600 text-white p-4 rounded-full sm:translate-x-4 sm:z-10">
            Call
          </p>
          <p className="bg-neutral-800 text-white p-4 rounded-full sm:rounded-r-full sm:rounded-l-none sm:-translate-x-4 w-44 text-center sm:text-end">
            +201554230714
          </p>
        </div>

      </div>
    </section>

    <section className="flex items-center text-white justify-center bg-neutral-800 h-20">
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
    </section>
    </div>
  );
}

export default App;
