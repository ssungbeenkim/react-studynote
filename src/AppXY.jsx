/* 상태를 객체 단위로 보관하고 업데이트 해보자. */

import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // 연관 있는 데이터라면 객체로 묶어서 관리하는 편이 효율적이다.
  const handleMove = (e) => {
    // setX(e.clientX);
    // setY(e.clientY);
    // setPosition({ x: e.clientX, y: e.clientY });
    /* set을 여러번 호출하더라도 리엑트가 알아서 묶어서 렌더하지만 비동기적으로 여러번 호출하는 경우에는 
    효율적으로 되지 않을 수 있다. */
    // setPosition((prev) => ({ x: e.clientX, y: prev.y })); // x만 움직이게 하려면
    setPosition((prev) => ({ y: e.clientY, x: e.clientX })); // 값이 여러개인 경우에 이렇게 할 수 있다.
  };
  return (
    <div className='container' onPointerMove={handleMove}>
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px,${position.y}px)` }}
      />
    </div>
  );
}
