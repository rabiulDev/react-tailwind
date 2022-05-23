import React from 'react'

const Link = ({route}) => {
    const {name, link} = route;
  return (
    <li>
        <a href={link}> {name} </a>
    </li>
  )
}

export default Link