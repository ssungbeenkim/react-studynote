import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

/* 
성능
문제되지 않는다면 집착하지는 않아도 좋다. 
*함수형 컴포넌트는 props와 state가 변경될 때 마다 리렌더링이 된다.
*콘솔 컴포넌트 세팅에서 하이라이트로 어디까지 리렌더링이 되는지 확인할 수 있다.
*/

export default function AppReducerButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    // 리렌더링 될 때마다 handleUpdate에 새로이 함수를 만들어서 만든 함수 객체의 참조값을 할당한다.
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'deleted', name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
      <Button text='멘토 삭제하기' onClick={handleDelete} />
    </div>
  );
  /* 
  하위 컴포넌트가 있고 프롭으로 전달되는 값들이 부모 컨테이너가 렌더링이 될 때마다 새롭게 만들어진 함수 객체가 새로 할당된다.
  text에도 새로운 문자열이 할당된다.
  props로 전달하는 값들이 최상위 컴포넌트에서 새롭게 할당되는 값이라면, 부모 컴포넌트가 새롭게 렌더링 될 때마다
  새로운 값이 자식 컴포넌트에 전달되므로 자식 컴포넌트도 새롭게 렌더링 된다. */
}

/* 
이런 식이라면 최상위 컴포넌트가 업데이트 될 때마다 자식과 자식의 자식.. 컴포넌트가 다시 다 리렌도 된다. 
하지만 리렌더링이 되더라도 리엑트에서는 내부적으로 가장 돔을 가지고 있고 실제로 없데이트 되는 요소만 업데이트 하기 때문에 
모두 리렌더 된다고 해도 실제 브라우저 돔 요소에서는 전체가 업데이트 되지는 않는다. 
컴포넌트 안에서 헤비한 일을 하지 않는 이상 그닥 크게 성능에 영향을 주지는 않는다. 
가상 돔도 있지만 리엑트 팀에서도 알아서 리렌더 하지 않토록 열심히 업데이트 하는중이다.
*/

// 헤비한 일을 하는 컴포넌트라면? -> 앞으로 배울 Memo, useMemo, useCallback을 사용해서
// 매번 호출되지 않토록 할 수 있다. 즉, 필요한 곳에서 성능개선을 해 주면 된다.

function Button({ text, onClick }) {
  console.log('Button', text, 're-rendering 😜');
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {text}
    </button>
  );
}

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
