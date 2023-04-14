import React, { useState } from 'react';
/* 
리엑트의 철학은 모든 UI의 업데이트는 상태 변경으로부터 발생해야 한다는 것이다.  
form과 같은 입력폼은 리엑트 내부적으로 상태 변경이 이루어지지 않아도 바로 UI상으로 입력된 것이 보여진다. 
form에 있는 input data는 사용자가 바로 수정하고 눈으로 확인이 가능하기 때문에 
이런 것을 uncontrolled componenet라고 한다. 이는 React에서 추구하는 원칙에 어긋난다. 
이런 입력 폼과 같은 경우에는 사용자가 입력한 것이 컴포넌트의 상태에도 매칭이 되도록 만들어 주어야 한다. 
*/
export default function Appform() {
  const [form, setForm] = useState({ name: '', email: '' });
  // 상태는 개별적으로 관리해도 되지만 연관된 데이터라면 객체로 묶어서 관리하면 좋다.
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name} // 초기값을 설정해준다.
        onChange={handleChange} //사용자가 텍스트를 입력하면 콜백을 호출하여 컴포넌트의 상태와 매칭한다.
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='email'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
