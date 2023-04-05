import React from 'react';

export default function Profile() {
  return (
    <div className='profile'>
      <img
        className='photo'
        src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
        alt='avata'
      />
      <h1>Sarah Kim</h1>
      <p>Software Engineer</p>
    </div>
  );
}
