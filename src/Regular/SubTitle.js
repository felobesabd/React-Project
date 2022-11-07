import React from 'react'
import { Link } from 'react-router-dom';

const SubTitle = ({title, text, path}) => {
  return (
    <div className='d-flex pt-4 justify-content-between'>
    <div className='sub-title'>{title}</div>
    {
        text !== '' ?
        <Link to={path} style={{textDecoration:'none'}}>
        <div className='sub-text'>{text}</div>
        </Link>
        :null
    }
    </div>
  )
}

export default SubTitle;