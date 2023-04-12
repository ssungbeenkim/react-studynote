import React from 'react';
/* 
Wrap Component = high order component 
컴포넌트의 재사용 
*/
export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          name='bob'
          size={300}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <p>안녕하세요!</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size * 1.4}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
