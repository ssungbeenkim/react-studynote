/*
재사용 가능한 커스텀 훅을 만들어 보자. -> ./hooks/use-customHook.jsx
hook은 use로 시작하는 것이 스타일 가이드.

커스텀 훅이 일반 컴포넌트와 다른 점은 UI JSX를 반환하지 않고, 외부에 공유하고 싶은 데이터를 반환한다는 것이다.
hooks는 로직의 재사용을 위한 것이지 값의 재사용을 위한 것은 아니다. 커스텀 훅에서 사용하는 데이터는 
글로벌로 설정된 것이 아니기 때문에 사용하는 곳마다 개별적인 데이터가 만들어지며 값 자체가 공유되는 것이 아니다. (useState와 마찬가지)
*/

import React, { useState } from 'react';
import useProducts from './hooks/use-customHook';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked((prev) => !prev);
  const [loading, products, error] = useProducts({ salesOnly: checked });

  if (loading) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생했습니다.</p>;
  return (
    <>
      <input type='checkbox' value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show only 🔥Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
