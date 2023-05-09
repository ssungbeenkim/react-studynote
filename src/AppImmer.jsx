import { useImmer } from 'use-immer';
/* 
리엑트의 state는 읽기 전용이다. 변경이 필요하다면 기존에 있던 것을 복사해서 변경할 부분만 변경해서 새로 만들어야 한다
코드가 길어지기 때문에 redux나 mobx와 같은 상태관리 라이브러리를 사용했다. immer는 직관적인 상태관리 라이브러리이다. 
요즘에는 굳이 상태관리 라이브러리를 사용하지 않아도 리엑트 최신 버전에서 제공하는 hook을 이용할 수 있다. 
글로벌한 상태관리는 context를 사용할 수 있고, 로직을 재사용하고 다른 곳에 두고 싶다면 reduce를 쓸 수 있다. 
요즘에는 이런 최신 api로 커버가 가능하다. 

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
    }); // 직접 person.mentors를 수정하는 것 처럼 사용할 수 있다... 존나편한데?
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
  name: '성빈',
  title: '개발자',
  mentors: [
    {
      name: '엘리',
      title: '시니어개발자',
    },
    {
      name: '스티브잡스',
      title: '시니어개발자',
    },
  ],
};
