import React from 'react'

export default function Badge(props) {
    const location=props.location
    const link=props.link
  return (
    <div >
        <a href={link} target='_blank'>
        <img src={location} width={120}></img>
        </a>
    </div>
  )
}
