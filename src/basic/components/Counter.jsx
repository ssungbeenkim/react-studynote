import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <span className='number'>
        {count}
        <span className='total'>/{total}</span>
      </span>
      <button
        className='button'
        onClick={() => {
          // setCount(count + 1);
          // setCount(count + 1);
          // setCount(count + 1); // 이렇게 여러번 해봤자 1씩 증가한다. 클로저와 관련.
          setCount((prev) => prev + 1); // 이전 상태값을 받아서 처리하는 함수를 넣어주면 된다.
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
