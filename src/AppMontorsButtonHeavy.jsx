import React, { useCallback, useMemo, useReducer, memo } from 'react';
import personReducer from './reducer/person-reducer';

// 헤비한 일을 하는 컴포넌트라면? -> 앞으로 배울 Memo, useMemo, useCallback을 사용해서
// 매번 호출되지 않토록 할 수 있다. 즉, 필요한 곳에서 성능개선을 해 주면 된다.

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // useCallback을 사용하면, 리렌더링 될 때마다 handleUpdate가 새로 할당되지 않는다.
  // useMemo와 비슷한 일을 한다.
  // useCallback은 함수를 캐싱하는 것이고, useMemo는 함수의 실행 결과값을 캐싱하는 것이다.
  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  }, []);
  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'deleted', name });
  }, []);

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
  ); // 상위 컴포넌트가 리렌더링 될 때 아무리 같은 값을 전달한다고 해도 Button에 전달되는 props 객체는 새로운 참조값을 가지게 되므로, 리렌더링이 발생한다.
} // -> Button 컴포넌트 자체를 memo로 감싸면 된다. *1

/* useMemo
 * useMemo는 특정 결과값을 재사용할 수 있도록 해준다.
 * 컴포넌트 내부에서 무거운 일을 하고, 매번 호출되지 않아도 되는 경우에 사용한다.
 */

const Button = memo(({ text, onClick }) => {
  // *1 상위 컴포넌트에서 전달되는 새로운 props 객체가 생성되더라도 props 내의 값이 같다면 리렌더링을 하지 않도록 한다.
  console.log('Button', text, 're-rendering 😜');
  // const result = calculateSomething(); // 헤비한 일을 하는 함수로 인해 렌더링이 오래 걸린다.
  const result = useMemo(() => calculateSomething(), []);
  //useMemo는 calculateSomething() 함수를 호출하여 결과 값을 캐싱하고, 렌더링 시 이전에 계산한 값을 사용
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
      {`${text} ${result}`}
    </button>
  );
});
/* 개선 방법
 * 매번 할 것이 아니라 처음에만 계산하면 된다면 -> useEffect를 사용하거나 useMemo를 사용할 수 있다.
 */
function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('🙃');
  }
  return 'heavy thing done';
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

// 성능 개선은 성능이 정말 문제가 될 경우 성능 측정을 통해 개선하면 된다.
