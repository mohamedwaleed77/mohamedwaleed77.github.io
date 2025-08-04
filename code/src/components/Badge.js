import React from 'react'

export default function Badge(props) {
    const location=props.location
    const link=props.link
  return (
    <div class='w-24'>
        <a href={link} target='_blank'>
        <img src={location} width={100}></img>
        </a>
    </div>
  )
}
