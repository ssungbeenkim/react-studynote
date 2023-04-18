import { useImmer } from 'use-immer';
/* 
중첩된 객체의 상태를 관리하는 것은 복잡하고, 이것을 더욱 직관적으로 만들어주는 immer 라이브러리가 있다. avatar
불변성 상태를 손쉽게 변경할 수 있다. 
immer 내부적으로 별도의 객체를 만들어서 리턴해주고, 내부적으로 상태를 업데이트 해준다. 
react 최신 버전의 hook으로 사용하는 것처럼 사용하려면 use-immer를 추가로 설치해서 사용한다.  
실제 객체를 직접 수정하는 것 처럼 사용할 수 있어서 편리하다. 중첩되고 복잡한 상태관리를 할 때에 유용하게 쓸 수 있다. 
*/
export default function AppMentor() {
  const [person, updatePerson] = useImmer(initialPerson);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      // update
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current; // immer가 알아서 새로운 객체를 만들어서 리턴해준다.
    }); // 직접 person.mentors를 수정하는 것 처럼 사용할 수 있다.
  };
  const handleAdd = () => {
    const name = prompt(`누구추가?`);
    const title = prompt(`타이틀?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    const name = prompt(`누구삭제?`);
    updatePerson((person) => {
      person.mentors = person.mentors.filter((m) => m.name !== name);
    });
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
