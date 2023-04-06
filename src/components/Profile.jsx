import React from 'react';
import Avater from './Avater';

export default function Profile({ image, name, title, isNew }) {
  // props 이용 conponet 재사용
  return (
    <div className='profile'>
      {isNew && <span className='tag'>New</span>}
      <Avater image={image} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}
