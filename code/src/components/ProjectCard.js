import GlitchOverlay from "./Glitch"


function ProjectCard(props) {
  return (
    <a className="w-64  text-white [text-shadow:_0_0px_5px_rgb(255_255_255_/_1)] hover:text-xl font-extrabold bg-neutral-800 relative hover:[text-shadow:_0_0px_5px_rgb(80_95_230_/_0.9)] hover:text-indigo-600 hover:bg-neutral-900  " href={props.link} target="_blank">
      <img className='absolute w-3/2 z-10' src="tv.png"></img>
        <div className='flex flex-col w-64 h-64 items-center justify-center overflow-hidden relative	' >
            <GlitchOverlay></GlitchOverlay>
            <a className='text-center w-32 drop-shadow-lg rounded-md w-32 pb-12' >
                {props.project}
            </a>
        </div>
    </a>
     
  )
}


export default ProjectCard