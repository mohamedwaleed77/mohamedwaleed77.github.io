import React from 'react'

export default function Skills(props) {
    let elem = (
        <div className="flex justify-center gap-4 flex-wrap">
          {props.skills.map((skill) => (
            
            <p className='bg-blue-600 p-2 rounded-full min-w-16 animate-bounce delay-170 hover:animate-none' >{skill}</p>
          ))}
        </div>
      );
    
      return elem;
}
