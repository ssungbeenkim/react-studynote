import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer.js';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  // person객체를 업데이트 하는 로직을 다른 곳에 두고 재사용 할 수 있게 해보자.
  // useReducer는 업데이트 하는 로직을 다른곳에 두고 재사용하고자 할 때 쓸 수 있다.
  // 이렇게 컴포넌트에서 로직을 분리하므로써 재사용성, 테스트 편리성을 가질 수 있다.

  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
    /* dispatch를 호출하면 useReducer가 자동으로 콜백을 호출하며, 기존의 person객체와 함께 
    dispatch에 전달한 action오브젝트를 두번째 인자로 전달해 준다. 
    외부 로직에서 업데이트한 객체를 리턴하면 자동으로 state를 업데이트 해서 person에 반영하고 re-render한다.  */
  };

  const handleAdd = () => {
    const name = prompt(`누구추가?`);
    const title = prompt(`타이틀?`);
    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`누구삭제?`);
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
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가</button>
      <button onClick={handleDelete}>멘토 삭제</button>
    </div>
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
