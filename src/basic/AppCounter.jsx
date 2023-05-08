import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

/* 
리엑트에서 변경 가능한 상태는 useState를 사용해야 한다. 
*/

export default function AppCounter() {
  const [count, setCount] = useState(0); // 변경이 가능한 value와 value를 업데이트 할 수 있는 함수를 리턴한다.
  // let num = 0; react에서 UI와 밀접하게 관련있는 데이터는 state로 관리해야한다.
  // 리엑트 라이브러리에게 변경 가능한 데이터가 있고, 변경이 될 때마다 UI를 업데이트 하도록 하기 위해서 useState를 사용한다.
  const handleClick = () => setCount((prev) => prev + 1);

  return (
    <div className='container'>
      <div className='banner'>
        Total Count: {count} {count > 10 ? '🔥' : '❄️'}
      </div>
      <div className='counters'>
        <Counter total={count} onClick={handleClick} />
        <Counter total={count} onClick={handleClick} />
      </div>
    </div>
  );
}
/* 
setCount를 호출하면 리엑트가 Counter를 다시 호출한다. 
Counter에 전달되는 prop이 있다면 그 값이 변경되거나 useState에서 반환하는 setState를 호출해서 
내부 상태를 변경할 때마다 변경된 해당 컴포넌트 함수 전체를 다시 호출한다. 

그래서 돔 요소들이 다시 생성되는데 리엑트에서는 가상 돔을 사용하기 때문에 이전 값과 비교하여 변경된 부분
(예제이서는 span)만 실제 돔에 반영한다. 
useState 훅은 여러번 호출되어도 내부적으로 값을 기억하고 있기 때문에 초기 값으로 초기화 되지 않고 증가된 counter값을 기억할 수 있는 것이다. 
*/
